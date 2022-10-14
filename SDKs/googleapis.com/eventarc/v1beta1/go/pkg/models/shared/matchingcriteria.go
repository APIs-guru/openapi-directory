package shared

type MatchingCriteria struct {
	Attribute *string `json:"attribute,omitempty"`
	Value     *string `json:"value,omitempty"`
}
