package shared



type CustomerSettings struct {
    AuditLoggingSettings *AuditLoggingSettings `json:"auditLoggingSettings,omitempty"`
    VpcSettings *VpcSettings `json:"vpcSettings,omitempty"`
    
}

