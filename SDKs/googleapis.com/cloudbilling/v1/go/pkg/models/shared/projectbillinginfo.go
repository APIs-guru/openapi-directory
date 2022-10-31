package shared



type ProjectBillingInfo struct {
    BillingAccountName *string `json:"billingAccountName,omitempty"`
    BillingEnabled *bool `json:"billingEnabled,omitempty"`
    Name *string `json:"name,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    
}

