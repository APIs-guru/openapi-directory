package shared

// CommitCursorRequest
// Request for CommitCursor.
type CommitCursorRequest struct {
	Cursor    *Cursor `json:"cursor,omitempty"`
	Partition *string `json:"partition,omitempty"`
}
