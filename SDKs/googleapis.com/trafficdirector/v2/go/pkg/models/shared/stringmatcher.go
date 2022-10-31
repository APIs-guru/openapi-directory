package shared

type StringMatcher struct {
	Exact      *string       `json:"exact,omitempty"`
	IgnoreCase *bool         `json:"ignoreCase,omitempty"`
	Prefix     *string       `json:"prefix,omitempty"`
	Regex      *string       `json:"regex,omitempty"`
	SafeRegex  *RegexMatcher `json:"safeRegex,omitempty"`
	Suffix     *string       `json:"suffix,omitempty"`
}
