package shared

// ContactGroupMetadata
// The metadata about a contact group.
type ContactGroupMetadata struct {
	Deleted    *bool   `json:"deleted,omitempty"`
	UpdateTime *string `json:"updateTime,omitempty"`
}
