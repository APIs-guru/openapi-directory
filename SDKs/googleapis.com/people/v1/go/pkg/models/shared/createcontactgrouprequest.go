package shared



type CreateContactGroupRequest struct {
    ContactGroup *ContactGroup `json:"contactGroup,omitempty"`
    ReadGroupFields *string `json:"readGroupFields,omitempty"`
    
}

