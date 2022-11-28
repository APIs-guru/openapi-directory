import { SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { DataValidationRule } from "./datavalidationrule";
/**
 * Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
**/
export declare class SetDataValidationRequest extends SpeakeasyBase {
    range?: GridRange;
    rule?: DataValidationRule;
}
