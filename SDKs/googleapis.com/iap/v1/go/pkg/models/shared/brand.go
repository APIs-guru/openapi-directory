package shared



type Brand struct {
    ApplicationTitle *string `json:"applicationTitle,omitempty"`
    Name *string `json:"name,omitempty"`
    OrgInternalOnly *bool `json:"orgInternalOnly,omitempty"`
    SupportEmail *string `json:"supportEmail,omitempty"`
    
}

