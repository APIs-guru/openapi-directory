package shared

// ComputeHeadCursorResponse
// Response containing the head cursor for the requested topic and partition.
type ComputeHeadCursorResponse struct {
	HeadCursor *Cursor `json:"headCursor,omitempty"`
}
