import { SpeakeasyBase } from "../../../internal/utils";
import { RegexMatcher } from "./regexmatcher";
/**
 * Specifies the way to match a string. [#next-free-field: 7]
**/
export declare class StringMatcher extends SpeakeasyBase {
    exact?: string;
    ignoreCase?: boolean;
    prefix?: string;
    regex?: string;
    safeRegex?: RegexMatcher;
    suffix?: string;
}
