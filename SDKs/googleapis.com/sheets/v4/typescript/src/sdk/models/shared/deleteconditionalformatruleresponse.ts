import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";


// DeleteConditionalFormatRuleResponse
/** 
 * The result of deleting a conditional format rule.
**/
export class DeleteConditionalFormatRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=rule" })
  rule?: ConditionalFormatRule;
}
