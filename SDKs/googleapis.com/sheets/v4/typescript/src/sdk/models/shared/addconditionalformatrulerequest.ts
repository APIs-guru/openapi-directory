import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";



// AddConditionalFormatRuleRequest
/** 
 * Adds a new conditional format rule at the given index. All subsequent rules' indexes are incremented.
**/
export class AddConditionalFormatRuleRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=index" })
  index?: number;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: ConditionalFormatRule;
}
