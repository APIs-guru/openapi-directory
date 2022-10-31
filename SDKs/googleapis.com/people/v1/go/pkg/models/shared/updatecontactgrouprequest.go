package shared



type UpdateContactGroupRequest struct {
    ContactGroup *ContactGroup `json:"contactGroup,omitempty"`
    ReadGroupFields *string `json:"readGroupFields,omitempty"`
    UpdateGroupFields *string `json:"updateGroupFields,omitempty"`
    
}

