package shared

type ContactGroupResponse struct {
	ContactGroup          *ContactGroup `json:"contactGroup"`
	RequestedResourceName *string       `json:"requestedResourceName"`
	Status                *Status       `json:"status"`
}
