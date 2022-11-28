package shared

// RegexMatcher
// A regex matcher designed for safety when used with untrusted input.
type RegexMatcher struct {
	GoogleRe2 *GoogleRe2 `json:"googleRe2,omitempty"`
	Regex     *string    `json:"regex,omitempty"`
}
