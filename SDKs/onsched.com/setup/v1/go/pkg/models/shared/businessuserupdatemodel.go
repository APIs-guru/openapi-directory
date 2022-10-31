package shared



type BusinessUserUpdateModel struct {
    Email *string `json:"email,omitempty"`
    Name *string `json:"name,omitempty"`
    ResourceID *string `json:"resourceId,omitempty"`
    Role *string `json:"role,omitempty"`
    SendRegistrationInvite *bool `json:"sendRegistrationInvite,omitempty"`
    
}

