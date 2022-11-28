import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexValidation } from "./regexvalidation";
import { ValueValidation } from "./valuevalidation";



// ParameterValidation
/** 
 * Configuration for parameter validation.
**/
export class ParameterValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: RegexValidation;

  @SpeakeasyMetadata({ data: "json, name=values" })
  values?: ValueValidation;
}
