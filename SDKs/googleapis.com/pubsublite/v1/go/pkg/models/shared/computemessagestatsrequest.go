package shared

// ComputeMessageStatsRequest
// Compute statistics about a range of messages in a given topic and partition.
type ComputeMessageStatsRequest struct {
	EndCursor   *Cursor `json:"endCursor,omitempty"`
	Partition   *string `json:"partition,omitempty"`
	StartCursor *Cursor `json:"startCursor,omitempty"`
}
