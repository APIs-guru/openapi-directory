package shared



type SeekRequest struct {
    Snapshot *string `json:"snapshot,omitempty"`
    Time *string `json:"time,omitempty"`
    
}

