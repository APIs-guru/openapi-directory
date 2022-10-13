package shared

type ObPostalAddress6 struct {
	AddressLine        []string               `json:"AddressLine"`
	AddressType        *ObAddressTypeCodeEnum `json:"AddressType"`
	BuildingNumber     *string                `json:"BuildingNumber"`
	Country            *string                `json:"Country"`
	CountrySubDivision *string                `json:"CountrySubDivision"`
	Department         *string                `json:"Department"`
	PostCode           *string                `json:"PostCode"`
	StreetName         *string                `json:"StreetName"`
	SubDepartment      *string                `json:"SubDepartment"`
	TownName           *string                `json:"TownName"`
}
