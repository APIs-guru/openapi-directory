package shared

// MatchingCriteria
// Matches events based on exact matches on the CloudEvents attributes.
type MatchingCriteria struct {
	Attribute *string `json:"attribute,omitempty"`
	Value     *string `json:"value,omitempty"`
}
