import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { RegexMatcher } from "./regexmatcher";


// StringMatcher
/** 
 * Specifies the way to match a string. [#next-free-field: 7]
**/
export class StringMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=exact" })
  exact?: string;

  @Metadata({ data: "json, name=ignoreCase" })
  ignoreCase?: boolean;

  @Metadata({ data: "json, name=prefix" })
  prefix?: string;

  @Metadata({ data: "json, name=regex" })
  regex?: string;

  @Metadata({ data: "json, name=safeRegex" })
  safeRegex?: RegexMatcher;

  @Metadata({ data: "json, name=suffix" })
  suffix?: string;
}
