package shared

type JSONPathMatcherJSONMatcherEnum string

const (
	JSONPathMatcherJSONMatcherEnumJSONPathMatcherOptionUnspecified JSONPathMatcherJSONMatcherEnum = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED"
	JSONPathMatcherJSONMatcherEnumExactMatch                       JSONPathMatcherJSONMatcherEnum = "EXACT_MATCH"
	JSONPathMatcherJSONMatcherEnumRegexMatch                       JSONPathMatcherJSONMatcherEnum = "REGEX_MATCH"
)

// JSONPathMatcher
// Information needed to perform a JSONPath content match. Used for ContentMatcherOption::MATCHES_JSON_PATH and ContentMatcherOption::NOT_MATCHES_JSON_PATH.
type JSONPathMatcher struct {
	JSONMatcher *JSONPathMatcherJSONMatcherEnum `json:"jsonMatcher,omitempty"`
	JSONPath    *string                         `json:"jsonPath,omitempty"`
}
