package shared

type ModifyContactGroupMembersRequest struct {
	ResourceNamesToAdd    []string `json:"resourceNamesToAdd"`
	ResourceNamesToRemove []string `json:"resourceNamesToRemove"`
}
