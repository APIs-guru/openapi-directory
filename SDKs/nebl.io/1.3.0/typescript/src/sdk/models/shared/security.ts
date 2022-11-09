import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeRpcAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
