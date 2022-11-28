package shared

// ModifyContactGroupMembersRequest
// A request to modify an existing contact group's members. Contacts can be removed from any group but they can only be added to a user group or "myContacts" or "starred" system groups.
type ModifyContactGroupMembersRequest struct {
	ResourceNamesToAdd    []string `json:"resourceNamesToAdd,omitempty"`
	ResourceNamesToRemove []string `json:"resourceNamesToRemove,omitempty"`
}
