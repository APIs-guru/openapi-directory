package shared

type Subject struct {
	CommonName         *string `json:"commonName,omitempty"`
	CountryCode        *string `json:"countryCode,omitempty"`
	Locality           *string `json:"locality,omitempty"`
	Organization       *string `json:"organization,omitempty"`
	OrganizationalUnit *string `json:"organizationalUnit,omitempty"`
	PostalCode         *string `json:"postalCode,omitempty"`
	Province           *string `json:"province,omitempty"`
	StreetAddress      *string `json:"streetAddress,omitempty"`
}
