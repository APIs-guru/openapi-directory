package shared

type ListConstraint struct {
	SuggestedValue *string `json:"suggestedValue"`
	SupportsUnder  *bool   `json:"supportsUnder"`
}
