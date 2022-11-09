import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";


// AddConditionalFormatRuleRequest
/** 
 * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
**/
export class AddConditionalFormatRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=rule" })
  rule?: ConditionalFormatRule;
}
