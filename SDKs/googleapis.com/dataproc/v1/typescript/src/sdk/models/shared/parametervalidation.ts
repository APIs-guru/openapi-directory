import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexValidation } from "./regexvalidation";
import { ValueValidation } from "./valuevalidation";


// ParameterValidation
/** 
 * Configuration for parameter validation.
**/
export class ParameterValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=regex" })
  regex?: RegexValidation;

  @Metadata({ data: "json, name=values" })
  values?: ValueValidation;
}
