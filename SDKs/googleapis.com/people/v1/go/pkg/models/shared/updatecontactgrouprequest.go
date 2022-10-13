package shared

type UpdateContactGroupRequest struct {
	ContactGroup      *ContactGroup `json:"contactGroup"`
	ReadGroupFields   *string       `json:"readGroupFields"`
	UpdateGroupFields *string       `json:"updateGroupFields"`
}
