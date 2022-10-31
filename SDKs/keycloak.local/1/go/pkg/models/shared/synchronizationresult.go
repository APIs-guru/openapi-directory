package shared



type SynchronizationResult struct {
    Added *int32 `json:"added,omitempty"`
    Failed *int32 `json:"failed,omitempty"`
    Ignored *bool `json:"ignored,omitempty"`
    Removed *int32 `json:"removed,omitempty"`
    Status *string `json:"status,omitempty"`
    Updated *int32 `json:"updated,omitempty"`
    
}

