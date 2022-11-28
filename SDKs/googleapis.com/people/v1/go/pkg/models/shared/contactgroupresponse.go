package shared

// ContactGroupResponse
// The response for a specific contact group.
type ContactGroupResponse struct {
	ContactGroup          *ContactGroup `json:"contactGroup,omitempty"`
	RequestedResourceName *string       `json:"requestedResourceName,omitempty"`
	Status                *Status       `json:"status,omitempty"`
}
