package shared



type ReportRequest struct {
    Operations []Operation `json:"operations,omitempty"`
    ServiceConfigID *string `json:"serviceConfigId,omitempty"`
    
}

