import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";



// DeleteConditionalFormatRuleResponse
/** 
 * The result of deleting a conditional format rule.
**/
export class DeleteConditionalFormatRuleResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: ConditionalFormatRule;
}
