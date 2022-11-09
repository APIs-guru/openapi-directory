import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";

export enum JsonPathMatcherJsonMatcherEnum {
    JsonPathMatcherOptionUnspecified = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED"
,    ExactMatch = "EXACT_MATCH"
,    RegexMatch = "REGEX_MATCH"
}


// JsonPathMatcher
/** 
 * Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
**/
export class JsonPathMatcher extends SpeakeasyBase {
  @Metadata({ data: "json, name=jsonMatcher" })
  jsonMatcher?: JsonPathMatcherJsonMatcherEnum;

  @Metadata({ data: "json, name=jsonPath" })
  jsonPath?: string;
}
