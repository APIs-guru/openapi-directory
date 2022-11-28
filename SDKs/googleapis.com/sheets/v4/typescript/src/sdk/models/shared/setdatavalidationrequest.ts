import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GridRange } from "./gridrange";
import { DataValidationRule } from "./datavalidationrule";



// SetDataValidationRequest
/** 
 * Sets a data validation rule to every cell in the range. To clear validation in a range, call this with no rule specified.
**/
export class SetDataValidationRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=range" })
  range?: GridRange;

  @SpeakeasyMetadata({ data: "json, name=rule" })
  rule?: DataValidationRule;
}
