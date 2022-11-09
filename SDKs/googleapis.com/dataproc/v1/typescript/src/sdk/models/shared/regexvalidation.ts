import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RegexValidation
/** 
 * Validation based on regular expressions.
**/
export class RegexValidation extends SpeakeasyBase {
  @Metadata({ data: "json, name=regexes" })
  regexes?: string[];
}
