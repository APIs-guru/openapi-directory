import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeCookieSid extends SpeakeasyBase {
  @Metadata({ data: "security, name=brain.sid" })
  apiKey: string;
}


export class SchemeHeaderApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=X-Api-Key" })
  apiKey: string;
}


export class SchemeQueryApiKey extends SpeakeasyBase {
  @Metadata({ data: "security, name=key" })
  apiKey: string;
}


export class SecurityOption1 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookieSid: SchemeCookieSid;
}


export class SecurityOption2 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  headerApiKey: SchemeHeaderApiKey;
}


export class SecurityOption3 extends SpeakeasyBase {
  @Metadata({ data: "security, scheme=true;type=apiKey;subtype=query" })
  queryApiKey: SchemeQueryApiKey;
}


export class Security extends SpeakeasyBase {
  @Metadata({ data: "security, option=true" })
  option1?: SecurityOption1;

  @Metadata({ data: "security, option=true" })
  option2?: SecurityOption2;

  @Metadata({ data: "security, option=true" })
  option3?: SecurityOption3;
}
