package shared



type LighthouseCategoryV5 struct {
    AuditRefs []AuditRefs `json:"auditRefs,omitempty"`
    Description *string `json:"description,omitempty"`
    ID *string `json:"id,omitempty"`
    ManualDescription *string `json:"manualDescription,omitempty"`
    Score *interface{} `json:"score,omitempty"`
    Title *string `json:"title,omitempty"`
    
}

