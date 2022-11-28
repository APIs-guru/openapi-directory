import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeCookieSid extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=brain.sid" })
  apiKey: string;
}


export class SchemeHeaderApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=X-Api-Key" })
  apiKey: string;
}


export class SchemeQueryApiKey extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=key" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid?: SchemeCookieSid;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  headerApiKey?: SchemeHeaderApiKey;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey?: SchemeQueryApiKey;
}
