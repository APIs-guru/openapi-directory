package shared

type ContentMatcherMatcherEnum string

const (
	ContentMatcherMatcherEnumContentMatcherOptionUnspecified ContentMatcherMatcherEnum = "CONTENT_MATCHER_OPTION_UNSPECIFIED"
	ContentMatcherMatcherEnumContainsString                  ContentMatcherMatcherEnum = "CONTAINS_STRING"
	ContentMatcherMatcherEnumNotContainsString               ContentMatcherMatcherEnum = "NOT_CONTAINS_STRING"
	ContentMatcherMatcherEnumMatchesRegex                    ContentMatcherMatcherEnum = "MATCHES_REGEX"
	ContentMatcherMatcherEnumNotMatchesRegex                 ContentMatcherMatcherEnum = "NOT_MATCHES_REGEX"
	ContentMatcherMatcherEnumMatchesJSONPath                 ContentMatcherMatcherEnum = "MATCHES_JSON_PATH"
	ContentMatcherMatcherEnumNotMatchesJSONPath              ContentMatcherMatcherEnum = "NOT_MATCHES_JSON_PATH"
)

type ContentMatcher struct {
	Content         *string                    `json:"content"`
	JSONPathMatcher *JSONPathMatcher           `json:"jsonPathMatcher"`
	Matcher         *ContentMatcherMatcherEnum `json:"matcher"`
}
