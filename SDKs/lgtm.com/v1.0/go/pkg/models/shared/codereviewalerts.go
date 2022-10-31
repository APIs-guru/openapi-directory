package shared



type CodereviewAlerts struct {
    Fixed *int32 `json:"fixed,omitempty"`
    New *int32 `json:"new,omitempty"`
    Query *Query `json:"query,omitempty"`
    
}

