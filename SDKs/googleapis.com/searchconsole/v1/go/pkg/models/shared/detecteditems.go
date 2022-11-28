package shared

// DetectedItems
// Rich Results items grouped by type.
type DetectedItems struct {
	Items          []Item  `json:"items,omitempty"`
	RichResultType *string `json:"richResultType,omitempty"`
}
