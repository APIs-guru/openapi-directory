package shared

// Precondition
// A precondition on a document, used for conditional operations.
type Precondition struct {
	Exists     *bool   `json:"exists,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
