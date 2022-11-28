import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
import { CellFormat } from "./cellformat";
/**
 * A rule that may or may not match, depending on the condition.
**/
export declare class BooleanRule extends SpeakeasyBase {
    condition?: BooleanCondition;
    format?: CellFormat;
}
