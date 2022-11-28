package shared

// Address
// JSON template for address of a customer.
type Address struct {
	AddressLine1     *string `json:"addressLine1,omitempty"`
	AddressLine2     *string `json:"addressLine2,omitempty"`
	AddressLine3     *string `json:"addressLine3,omitempty"`
	ContactName      *string `json:"contactName,omitempty"`
	CountryCode      *string `json:"countryCode,omitempty"`
	Kind             *string `json:"kind,omitempty"`
	Locality         *string `json:"locality,omitempty"`
	OrganizationName *string `json:"organizationName,omitempty"`
	PostalCode       *string `json:"postalCode,omitempty"`
	Region           *string `json:"region,omitempty"`
}
