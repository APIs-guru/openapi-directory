package shared



type ContactGroupResponse struct {
    ContactGroup *ContactGroup `json:"contactGroup,omitempty"`
    RequestedResourceName *string `json:"requestedResourceName,omitempty"`
    Status *Status `json:"status,omitempty"`
    
}

