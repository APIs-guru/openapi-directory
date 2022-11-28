import { SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
/**
 * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
**/
export declare class AddConditionalFormatRuleRequest extends SpeakeasyBase {
    index?: number;
    rule?: ConditionalFormatRule;
}
