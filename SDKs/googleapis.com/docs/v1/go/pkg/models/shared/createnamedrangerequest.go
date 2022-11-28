package shared

// CreateNamedRangeRequest
// Creates a NamedRange referencing the given range.
type CreateNamedRangeRequest struct {
	Name  *string `json:"name,omitempty"`
	Range *Range  `json:"range,omitempty"`
}
