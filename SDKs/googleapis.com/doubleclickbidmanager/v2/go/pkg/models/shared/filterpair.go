package shared

// FilterPair
// Filter used to match traffic data in your report.
type FilterPair struct {
	Type  *string `json:"type,omitempty"`
	Value *string `json:"value,omitempty"`
}
