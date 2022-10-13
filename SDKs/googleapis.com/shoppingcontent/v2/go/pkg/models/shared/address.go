package shared

type Address struct {
	AdministrativeArea *string `json:"administrativeArea"`
	City               *string `json:"city"`
	Country            *string `json:"country"`
	PostalCode         *string `json:"postalCode"`
	StreetAddress      *string `json:"streetAddress"`
}
