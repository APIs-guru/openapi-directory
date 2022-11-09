import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { ConditionalFormatRule } from "./conditionalformatrule";


// UpdateConditionalFormatRuleRequest
/** 
 * Updates a conditional format rule at the given index, or moves a conditional format rule to another index.
**/
export class UpdateConditionalFormatRuleRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=index" })
  index?: number;

  @Metadata({ data: "json, name=newIndex" })
  newIndex?: number;

  @Metadata({ data: "json, name=rule" })
  rule?: ConditionalFormatRule;

  @Metadata({ data: "json, name=sheetId" })
  sheetId?: number;
}
