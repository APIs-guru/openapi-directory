package shared

type ShippingSettings struct {
	AccountID        *string           `json:"accountId"`
	PostalCodeGroups []PostalCodeGroup `json:"postalCodeGroups"`
	Services         []Service         `json:"services"`
	Warehouses       []Warehouse       `json:"warehouses"`
}
