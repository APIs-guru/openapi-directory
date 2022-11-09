import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { ObStatement2 } from "./obstatement2";


export class ObReadDataStatement2 extends SpeakeasyBase {
  @Metadata({ data: "json, name=Statement", elemType: shared.ObStatement2 })
  statement?: ObStatement2[];
}
