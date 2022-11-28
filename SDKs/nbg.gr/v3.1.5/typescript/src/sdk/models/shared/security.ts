import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAuthorizationCodeToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeClientCredentialsToken extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeClientId extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Client-Id" })
  apiKey: string;
}
