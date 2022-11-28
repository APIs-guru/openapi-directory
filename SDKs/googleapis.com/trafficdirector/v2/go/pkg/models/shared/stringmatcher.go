package shared

// StringMatcher
// Specifies the way to match a string. [#next-free-field: 7]
type StringMatcher struct {
	Exact      *string       `json:"exact,omitempty"`
	IgnoreCase *bool         `json:"ignoreCase,omitempty"`
	Prefix     *string       `json:"prefix,omitempty"`
	Regex      *string       `json:"regex,omitempty"`
	SafeRegex  *RegexMatcher `json:"safeRegex,omitempty"`
	Suffix     *string       `json:"suffix,omitempty"`
}
