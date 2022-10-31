package shared



type CommitCursorRequest struct {
    Cursor *Cursor `json:"cursor,omitempty"`
    Partition *string `json:"partition,omitempty"`
    
}

