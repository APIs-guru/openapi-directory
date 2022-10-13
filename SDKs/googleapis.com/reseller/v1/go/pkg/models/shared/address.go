package shared

type Address struct {
	AddressLine1     *string `json:"addressLine1"`
	AddressLine2     *string `json:"addressLine2"`
	AddressLine3     *string `json:"addressLine3"`
	ContactName      *string `json:"contactName"`
	CountryCode      *string `json:"countryCode"`
	Kind             *string `json:"kind"`
	Locality         *string `json:"locality"`
	OrganizationName *string `json:"organizationName"`
	PostalCode       *string `json:"postalCode"`
	Region           *string `json:"region"`
}
