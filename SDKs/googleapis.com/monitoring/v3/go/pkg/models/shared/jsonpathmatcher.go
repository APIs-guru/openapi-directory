package shared

type JSONPathMatcherJSONMatcherEnum string

const (
	JSONPathMatcherJSONMatcherEnumJSONPathMatcherOptionUnspecified JSONPathMatcherJSONMatcherEnum = "JSON_PATH_MATCHER_OPTION_UNSPECIFIED"
	JSONPathMatcherJSONMatcherEnumExactMatch                       JSONPathMatcherJSONMatcherEnum = "EXACT_MATCH"
	JSONPathMatcherJSONMatcherEnumRegexMatch                       JSONPathMatcherJSONMatcherEnum = "REGEX_MATCH"
)

type JSONPathMatcher struct {
	JSONMatcher *JSONPathMatcherJSONMatcherEnum `json:"jsonMatcher"`
	JSONPath    *string                         `json:"jsonPath"`
}
