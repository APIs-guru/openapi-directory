import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { GoogleRe2 } from "./googlere2";


// RegexMatcher
/** 
 * A regex matcher designed for safety when used with untrusted input.
**/
export class RegexMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=googleRe2" })
  googleRe2?: GoogleRe2;

  @Metadata({ data: "json, name=regex" })
  regex?: string;
}
