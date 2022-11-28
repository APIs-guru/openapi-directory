import { SpeakeasyBase } from "../../../internal/utils";
export declare enum JsonPathMatcherJsonMatcherEnum {
    JsonPathMatcherOptionUnspecified = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED",
    ExactMatch = "EXACT_MATCH",
    RegexMatch = "REGEX_MATCH"
}
/**
 * Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
**/
export declare class JsonPathMatcher extends SpeakeasyBase {
    jsonMatcher?: JsonPathMatcherJsonMatcherEnum;
    jsonPath?: string;
}
