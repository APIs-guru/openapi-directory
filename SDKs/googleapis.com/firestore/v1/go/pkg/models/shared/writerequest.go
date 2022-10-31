package shared



type WriteRequest struct {
    Labels map[string]string `json:"labels,omitempty"`
    StreamID *string `json:"streamId,omitempty"`
    StreamToken *string `json:"streamToken,omitempty"`
    Writes []Write `json:"writes,omitempty"`
    
}

