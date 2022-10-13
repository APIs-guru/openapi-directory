package shared

type AddressClaimSet struct {
	Country       *string `json:"country"`
	Formatted     *string `json:"formatted"`
	Locality      *string `json:"locality"`
	PostalCode    *string `json:"postal_code"`
	Region        *string `json:"region"`
	StreetAddress *string `json:"street_address"`
}
