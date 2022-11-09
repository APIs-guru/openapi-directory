import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GridRange } from "./gridrange";
import { DataValidationRule } from "./datavalidationrule";


// SetDataValidationRequest
/** 
 * Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
**/
export class SetDataValidationRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=range" })
  range?: GridRange;

  @Metadata({ data: "json, name=rule" })
  rule?: DataValidationRule;
}
