import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeOauth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class SchemePersonalAccessToken extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
