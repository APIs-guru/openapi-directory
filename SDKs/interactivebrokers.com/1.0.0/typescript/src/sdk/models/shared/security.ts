import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeCookieAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=portal" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  cookieAuth: SchemeCookieAuth;
}
