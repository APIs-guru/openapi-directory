package shared

type SubstringMatchCriteria struct {
	MatchCase *bool   `json:"matchCase"`
	Text      *string `json:"text"`
}
