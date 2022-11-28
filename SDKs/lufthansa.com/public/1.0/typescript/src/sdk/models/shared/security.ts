import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeAuth extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}
