import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeBearer extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeCookie extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=mercureAuthorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=http;subtype=bearer" })
  bearer?: SchemeBearer;

  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=cookie" })
  cookie?: SchemeCookie;
}
