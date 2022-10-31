package shared



type BatchCreateSessionsRequest struct {
    SessionCount *int32 `json:"sessionCount,omitempty"`
    SessionTemplate *Session `json:"sessionTemplate,omitempty"`
    
}

