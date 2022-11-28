package shared

// ObPostalAddress6
// Information that locates and identifies a specific address, as defined by postal services.
type ObPostalAddress6 struct {
	AddressLine        []string               `json:"AddressLine,omitempty"`
	AddressType        *ObAddressTypeCodeEnum `json:"AddressType,omitempty"`
	BuildingNumber     *string                `json:"BuildingNumber,omitempty"`
	Country            *string                `json:"Country,omitempty"`
	CountrySubDivision *string                `json:"CountrySubDivision,omitempty"`
	Department         *string                `json:"Department,omitempty"`
	PostCode           *string                `json:"PostCode,omitempty"`
	StreetName         *string                `json:"StreetName,omitempty"`
	SubDepartment      *string                `json:"SubDepartment,omitempty"`
	TownName           *string                `json:"TownName,omitempty"`
}
