package shared

type OrganizationInfo struct {
	Address          *PostalAddress `json:"address"`
	PhoneNumber      *string        `json:"phoneNumber"`
	RegisteredDomain *string        `json:"registeredDomain"`
}
