import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";
import { ConditionalFormatRule } from "./conditionalformatrule";


// UpdateConditionalFormatRuleResponse
/** 
 * The result of updating a conditional format rule.
**/
export class UpdateConditionalFormatRuleResponse extends SpeakeasyBase {
  @Metadata({ data: "json, name=newIndex" })
  newIndex?: number;

  @Metadata({ data: "json, name=newRule" })
  newRule?: ConditionalFormatRule;

  @Metadata({ data: "json, name=oldIndex" })
  oldIndex?: number;

  @Metadata({ data: "json, name=oldRule" })
  oldRule?: ConditionalFormatRule;
}
