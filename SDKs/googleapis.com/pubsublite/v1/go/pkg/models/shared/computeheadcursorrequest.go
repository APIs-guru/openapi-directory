package shared

// ComputeHeadCursorRequest
// Compute the current head cursor for a partition.
type ComputeHeadCursorRequest struct {
	Partition *string `json:"partition,omitempty"`
}
