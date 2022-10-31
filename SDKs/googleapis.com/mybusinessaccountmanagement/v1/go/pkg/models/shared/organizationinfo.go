package shared

type OrganizationInfo struct {
	Address          *PostalAddress `json:"address,omitempty"`
	PhoneNumber      *string        `json:"phoneNumber,omitempty"`
	RegisteredDomain *string        `json:"registeredDomain,omitempty"`
}
