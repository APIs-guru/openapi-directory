import { SpeakeasyBase } from "../../../internal/utils";
import { JsonPathMatcher } from "./jsonpathmatcher";
export declare enum ContentMatcherMatcherEnum {
    ContentMatcherOptionUnspecified = "CONTENT_MATCHER_OPTION_UNSPECIFIED",
    ContainsString = "CONTAINS_STRING",
    NotContainsString = "NOT_CONTAINS_STRING",
    MatchesRegex = "MATCHES_REGEX",
    NotMatchesRegex = "NOT_MATCHES_REGEX",
    MatchesJsonPath = "MATCHES_JSON_PATH",
    NotMatchesJsonPath = "NOT_MATCHES_JSON_PATH"
}
/**
 * Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
**/
export declare class ContentMatcher extends SpeakeasyBase {
    content?: string;
    jsonPathMatcher?: JsonPathMatcher;
    matcher?: ContentMatcherMatcherEnum;
}
