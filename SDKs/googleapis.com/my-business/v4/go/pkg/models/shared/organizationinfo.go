package shared

// OrganizationInfo
// Additional Info stored for an organization.
type OrganizationInfo struct {
	PhoneNumber      *string        `json:"phoneNumber,omitempty"`
	PostalAddress    *PostalAddress `json:"postalAddress,omitempty"`
	RegisteredDomain *string        `json:"registeredDomain,omitempty"`
}
