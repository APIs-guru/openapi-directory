import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { RegexMatcher } from "./regexmatcher";



// StringMatcher
/** 
 * Specifies the way to match a string. [#next-free-field: 7]
**/
export class StringMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=exact" })
  exact?: string;

  @SpeakeasyMetadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;

  @SpeakeasyMetadata({ data: "json, name=prefix" })
  prefix?: string;

  @SpeakeasyMetadata({ data: "json, name=regex" })
  regex?: string;

  @SpeakeasyMetadata({ data: "json, name=safeRegex" })
  safeRegex?: RegexMatcher;

  @SpeakeasyMetadata({ data: "json, name=suffix" })
  suffix?: string;
}
