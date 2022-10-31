package shared

type Subject struct {
	CountryCode        *string `json:"countryCode,omitempty"`
	Locality           *string `json:"locality,omitempty"`
	Organization       *string `json:"organization,omitempty"`
	OrganizationalUnit *string `json:"organizationalUnit,omitempty"`
	PostalCode         *string `json:"postalCode,omitempty"`
	Province           *string `json:"province,omitempty"`
	StreetAddress      *string `json:"streetAddress,omitempty"`
}
