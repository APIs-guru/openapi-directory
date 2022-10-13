package shared

type OrganizationInfo struct {
	PhoneNumber      *string        `json:"phoneNumber"`
	PostalAddress    *PostalAddress `json:"postalAddress"`
	RegisteredDomain *string        `json:"registeredDomain"`
}
