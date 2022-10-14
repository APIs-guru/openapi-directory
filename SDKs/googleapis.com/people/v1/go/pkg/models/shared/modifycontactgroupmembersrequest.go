package shared

type ModifyContactGroupMembersRequest struct {
	ResourceNamesToAdd    []string `json:"resourceNamesToAdd,omitempty"`
	ResourceNamesToRemove []string `json:"resourceNamesToRemove,omitempty"`
}
