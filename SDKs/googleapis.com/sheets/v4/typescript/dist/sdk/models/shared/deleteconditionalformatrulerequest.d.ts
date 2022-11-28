import { SpeakeasyBase } from "../../../internal/utils";
/**
 * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
**/
export declare class DeleteConditionalFormatRuleRequest extends SpeakeasyBase {
    index?: number;
    sheetId?: number;
}
