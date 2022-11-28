package shared

// ContactInfoList
// Wrapper message for a list of contact information defining Customer Match audience members.
type ContactInfoList struct {
	ContactInfos []ContactInfo `json:"contactInfos,omitempty"`
}
