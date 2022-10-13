package shared

type PostalAddress6Ch struct {
	AddressLine1   *string `json:"addressLine1"`
	AddressLine2   *string `json:"addressLine2"`
	BuildingNumber *string `json:"buildingNumber"`
	Country        *string `json:"country"`
	PostCode       *string `json:"postCode"`
	StreetName     *string `json:"streetName"`
	TownName       *string `json:"townName"`
}
