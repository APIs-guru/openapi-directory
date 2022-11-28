import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeJwt extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  apiKey: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=apiKey;subtype=header" })
  jwt: SchemeJwt;
}


export class SchemeBasicAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=password" })
  password: string;

  @SpeakeasyMetadata({ data: "security, name=username" })
  username: string;
}
