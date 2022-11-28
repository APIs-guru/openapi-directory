package shared

// ComputeTimeCursorResponse
// Response containing the cursor corresponding to a publish or event time in a topic partition.
type ComputeTimeCursorResponse struct {
	Cursor *Cursor `json:"cursor,omitempty"`
}
