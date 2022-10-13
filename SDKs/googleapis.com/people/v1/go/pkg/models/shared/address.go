package shared

type Address struct {
	City            *string        `json:"city"`
	Country         *string        `json:"country"`
	CountryCode     *string        `json:"countryCode"`
	ExtendedAddress *string        `json:"extendedAddress"`
	FormattedType   *string        `json:"formattedType"`
	FormattedValue  *string        `json:"formattedValue"`
	Metadata        *FieldMetadata `json:"metadata"`
	PoBox           *string        `json:"poBox"`
	PostalCode      *string        `json:"postalCode"`
	Region          *string        `json:"region"`
	StreetAddress   *string        `json:"streetAddress"`
	Type            *string        `json:"type"`
}
