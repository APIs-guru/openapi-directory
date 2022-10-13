package shared

type Address struct {
	BuildingNumber *string `json:"buildingNumber"`
	Country        string  `json:"country"`
	PostCode       *string `json:"postCode"`
	StreetName     *string `json:"streetName"`
	TownName       *string `json:"townName"`
}
