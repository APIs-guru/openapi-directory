package shared

type CreateContactGroupRequest struct {
	ContactGroup    *ContactGroup `json:"contactGroup"`
	ReadGroupFields *string       `json:"readGroupFields"`
}
