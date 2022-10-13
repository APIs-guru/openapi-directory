package shared

type ModifyContactGroupMembersResponse struct {
	CanNotRemoveLastContactGroupResourceNames []string `json:"canNotRemoveLastContactGroupResourceNames"`
	NotFoundResourceNames                     []string `json:"notFoundResourceNames"`
}
