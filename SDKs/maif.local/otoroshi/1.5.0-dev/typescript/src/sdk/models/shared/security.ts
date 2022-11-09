import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


export class SchemeOtoroshiAuth extends SpeakeasyBase {
  @Metadata({ data: "security, name=Authorization" })
  authorization: string;
}
