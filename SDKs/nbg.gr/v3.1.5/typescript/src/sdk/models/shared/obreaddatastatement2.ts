import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ObStatement2 } from "./obstatement2";



export class ObReadDataStatement2 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Statement", elemType: ObStatement2 })
  statement?: ObStatement2[];
}
