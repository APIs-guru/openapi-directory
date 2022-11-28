import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DeleteConditionalFormatRuleRequest
/** 
 * Deletes a conditional format rule at the given index. All subsequent rules' indexes are decremented.
**/
export class DeleteConditionalFormatRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
