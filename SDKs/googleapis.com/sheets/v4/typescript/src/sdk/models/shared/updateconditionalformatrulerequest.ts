import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";



// UpdateConditionalFormatRuleRequest
/** 
 * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
**/
export class UpdateConditionalFormatRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=newIndex" })
  newIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: ConditionalFormatRule;

  @SpeakeasyMetadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
