import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { BooleanCondition } from "./booleancondition";
import { CellFormat } from "./cellformat";


// BooleanRule
/** 
 * A rule that may or may not match, depending on the condition.
**/
export class BooleanRule extends SpeakeasyBase {
  @Metadata({ data: "json, name=condition" })
  condition?: BooleanCondition;

  @Metadata({ data: "json, name=format" })
  format?: CellFormat;
}
