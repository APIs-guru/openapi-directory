import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeBasicAuthentication extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
