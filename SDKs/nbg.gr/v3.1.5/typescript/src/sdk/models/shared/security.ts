import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeAuthorizationCodeToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeClientCredentialsToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemeClientId extends SpeakeasyBase {
  @Metadata({ data: "security, name=Client-Id" })
  apiKey: string;
}
