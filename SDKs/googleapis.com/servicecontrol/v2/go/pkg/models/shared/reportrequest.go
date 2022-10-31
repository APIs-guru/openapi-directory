package shared



type ReportRequest struct {
    Operations []AttributeContext `json:"operations,omitempty"`
    ServiceConfigID *string `json:"serviceConfigId,omitempty"`
    
}

