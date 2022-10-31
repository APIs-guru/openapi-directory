package shared



type BulkMuteFindingsRequest struct {
    Filter *string `json:"filter,omitempty"`
    MuteAnnotation *string `json:"muteAnnotation,omitempty"`
    
}

