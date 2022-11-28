package shared

// EventFilter
// Filters events based on exact matches on the CloudEvents attributes.
type EventFilter struct {
	Attribute *string `json:"attribute,omitempty"`
	Operator  *string `json:"operator,omitempty"`
	Value     *string `json:"value,omitempty"`
}
