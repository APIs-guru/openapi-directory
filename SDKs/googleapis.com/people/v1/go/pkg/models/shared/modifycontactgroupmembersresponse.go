package shared



type ModifyContactGroupMembersResponse struct {
    CanNotRemoveLastContactGroupResourceNames []string `json:"canNotRemoveLastContactGroupResourceNames,omitempty"`
    NotFoundResourceNames []string `json:"notFoundResourceNames,omitempty"`
    
}

