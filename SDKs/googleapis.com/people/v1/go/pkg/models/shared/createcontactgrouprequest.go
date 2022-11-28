package shared

// CreateContactGroupRequestInput
// A request to create a new contact group.
type CreateContactGroupRequestInput struct {
	ContactGroup    *ContactGroupInput `json:"contactGroup,omitempty"`
	ReadGroupFields *string            `json:"readGroupFields,omitempty"`
}
