package shared



type Target struct {
    Documents *DocumentsTarget `json:"documents,omitempty"`
    Once *bool `json:"once,omitempty"`
    Query *QueryTarget `json:"query,omitempty"`
    ReadTime *string `json:"readTime,omitempty"`
    ResumeToken *string `json:"resumeToken,omitempty"`
    TargetID *int32 `json:"targetId,omitempty"`
    
}

