import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";



// UpdateConditionalFormatRuleResponse
/** 
 * The result of updating a conditional format rule.
**/
export class UpdateConditionalFormatRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=newIndex" })
  newIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=newRule" })
  newRule?: ConditionalFormatRule;

  @SpeakeasyMetadata({ data: "json, name=oldIndex" })
  oldIndex?: number;

  @SpeakeasyMetadata({ data: "json, name=oldRule" })
  oldRule?: ConditionalFormatRule;
}
