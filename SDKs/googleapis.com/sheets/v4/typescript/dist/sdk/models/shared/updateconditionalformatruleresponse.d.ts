import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * The result of updating a conditional format rule.
**/
export declare class UpdateConditionalFormatRuleResponse extends SpeakeasyBase {
    newIndex?: number;
    newRule?: ConditionalFormatRule;
    oldIndex?: number;
    oldRule?: ConditionalFormatRule;
}
