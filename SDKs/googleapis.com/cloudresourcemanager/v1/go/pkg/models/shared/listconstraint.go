package shared

// ListConstraint
// A `Constraint` that allows or disallows a list of string values, which are configured by an Organization's policy administrator with a `Policy`.
type ListConstraint struct {
	SuggestedValue *string `json:"suggestedValue,omitempty"`
	SupportsUnder  *bool   `json:"supportsUnder,omitempty"`
}
