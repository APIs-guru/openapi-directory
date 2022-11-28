import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { JsonPathMatcher } from "./jsonpathmatcher";


export enum ContentMatcherMatcherEnum {
    ContentMatcherOptionUnspecified = "CONTENT_MATCHER_OPTION_UNSPECIFIED",
    ContainsString = "CONTAINS_STRING",
    NotContainsString = "NOT_CONTAINS_STRING",
    MatchesRegex = "MATCHES_REGEX",
    NotMatchesRegex = "NOT_MATCHES_REGEX",
    MatchesJsonPath = "MATCHES_JSON_PATH",
    NotMatchesJsonPath = "NOT_MATCHES_JSON_PATH"
}


// ContentMatcher
/** 
 * Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
**/
export class ContentMatcher extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=content" })
  content?: string;

  @SpeakeasyMetadata({ data: "json, name=jsonPathMatcher" })
  jsonPathMatcher?: JsonPathMatcher;

  @SpeakeasyMetadata({ data: "json, name=matcher" })
  matcher?: ContentMatcherMatcherEnum;
}
