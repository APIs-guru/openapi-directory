import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
import { CellFormat } from "./cellformat";



// BooleanRule
/** 
 * A rule that may or may not match, depending on the condition.
**/
export class BooleanRule extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @SpeakeasyMetadata({ data: "json, name=format" })
  format?: CellFormat;
}
