package shared

// ComputeTimeCursorRequest
// Compute the corresponding cursor for a publish or event time in a topic partition.
type ComputeTimeCursorRequest struct {
	Partition *string     `json:"partition,omitempty"`
	Target    *TimeTarget `json:"target,omitempty"`
}
