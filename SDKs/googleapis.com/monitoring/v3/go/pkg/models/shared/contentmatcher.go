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

// ContentMatcher
// Optional. Used to perform content matching. This allows matching based on substrings and regular expressions, together with their negations. Only the first 4 MB of an HTTP or HTTPS check's response (and the first 1 MB of a TCP check's response) are examined for purposes of content matching.
type ContentMatcher struct {
	Content         *string                    `json:"content,omitempty"`
	JSONPathMatcher *JSONPathMatcher           `json:"jsonPathMatcher,omitempty"`
	Matcher         *ContentMatcherMatcherEnum `json:"matcher,omitempty"`
}
