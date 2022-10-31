package shared



type ServiceAccount struct {
    Description *string `json:"description,omitempty"`
    Disabled *bool `json:"disabled,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    Email *string `json:"email,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Name *string `json:"name,omitempty"`
    Oauth2ClientID *string `json:"oauth2ClientId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    UniqueID *string `json:"uniqueId,omitempty"`
    
}

