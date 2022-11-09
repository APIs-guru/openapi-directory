import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// DeleteConditionalFormatRuleRequest
/** 
 * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
**/
export class DeleteConditionalFormatRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
