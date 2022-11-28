package shared

// UpdateContactGroupRequestInput
// A request to update an existing user contact group. All updated fields will be replaced.
type UpdateContactGroupRequestInput struct {
	ContactGroup      *ContactGroupInput `json:"contactGroup,omitempty"`
	ReadGroupFields   *string            `json:"readGroupFields,omitempty"`
	UpdateGroupFields *string            `json:"updateGroupFields,omitempty"`
}
