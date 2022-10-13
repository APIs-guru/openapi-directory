package shared

type RegexMatcher struct {
	GoogleRe2 *GoogleRe2 `json:"googleRe2"`
	Regex     *string    `json:"regex"`
}
