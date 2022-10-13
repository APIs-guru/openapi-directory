package shared

type Subject struct {
	CommonName         *string `json:"commonName"`
	CountryCode        *string `json:"countryCode"`
	Locality           *string `json:"locality"`
	Organization       *string `json:"organization"`
	OrganizationalUnit *string `json:"organizationalUnit"`
	PostalCode         *string `json:"postalCode"`
	Province           *string `json:"province"`
	StreetAddress      *string `json:"streetAddress"`
}
