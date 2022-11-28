import { SpeakeasyBase } from "../../../internal/utils";
import { BooleanCondition } from "./booleancondition";
/**
 * A data validation rule.
**/
export declare class DataValidationRule extends SpeakeasyBase {
    condition?: BooleanCondition;
    inputMessage?: string;
    showCustomUi?: boolean;
    strict?: boolean;
}
