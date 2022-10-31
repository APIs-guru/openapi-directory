package shared



type ComputeMessageStatsRequest struct {
    EndCursor *Cursor `json:"endCursor,omitempty"`
    Partition *string `json:"partition,omitempty"`
    StartCursor *Cursor `json:"startCursor,omitempty"`
    
}

