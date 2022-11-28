package shared

// ModifyContactGroupMembersResponse
// The response to a modify contact group members request.
type ModifyContactGroupMembersResponse struct {
	CanNotRemoveLastContactGroupResourceNames []string `json:"canNotRemoveLastContactGroupResourceNames,omitempty"`
	NotFoundResourceNames                     []string `json:"notFoundResourceNames,omitempty"`
}
