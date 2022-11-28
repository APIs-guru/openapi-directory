package shared

// CustomErrorRule
// A custom error rule.
type CustomErrorRule struct {
	IsErrorType *bool   `json:"isErrorType,omitempty"`
	Selector    *string `json:"selector,omitempty"`
}
