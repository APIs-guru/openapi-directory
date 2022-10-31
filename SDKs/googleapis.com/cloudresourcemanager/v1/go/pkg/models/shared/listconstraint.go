package shared

type ListConstraint struct {
	SuggestedValue *string `json:"suggestedValue,omitempty"`
	SupportsUnder  *bool   `json:"supportsUnder,omitempty"`
}
