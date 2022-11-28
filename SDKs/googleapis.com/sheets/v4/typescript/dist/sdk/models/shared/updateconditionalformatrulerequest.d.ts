import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
**/
export declare class UpdateConditionalFormatRuleRequest extends SpeakeasyBase {
    index?: number;
    newIndex?: number;
    rule?: ConditionalFormatRule;
    sheetId?: number;
}
