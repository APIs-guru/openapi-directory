package shared

type StringMatcher struct {
	Exact      *string       `json:"exact"`
	IgnoreCase *bool         `json:"ignoreCase"`
	Prefix     *string       `json:"prefix"`
	Regex      *string       `json:"regex"`
	SafeRegex  *RegexMatcher `json:"safeRegex"`
	Suffix     *string       `json:"suffix"`
}
