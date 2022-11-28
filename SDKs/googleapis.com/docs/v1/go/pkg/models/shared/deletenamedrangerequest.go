package shared

// DeleteNamedRangeRequest
// Deletes a NamedRange.
type DeleteNamedRangeRequest struct {
	Name         *string `json:"name,omitempty"`
	NamedRangeID *string `json:"namedRangeId,omitempty"`
}
