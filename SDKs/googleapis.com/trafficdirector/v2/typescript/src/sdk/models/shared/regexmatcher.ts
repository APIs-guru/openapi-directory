import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GoogleRe2 } from "./googlere2";



// RegexMatcher
/** 
 * A regex matcher designed for safety when used with untrusted input.
**/
export class RegexMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=googleRe2" })
  googleRe2?: GoogleRe2;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;
}
