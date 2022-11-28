import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RegexValidation
/** 
 * Validation based on regular expressions.
**/
export class RegexValidation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=regexes" })
  regexes?: string[];
}
