package shared

type ShippingSettings struct {
	AccountID        *string           `json:"accountId,omitempty"`
	PostalCodeGroups []PostalCodeGroup `json:"postalCodeGroups,omitempty"`
	Services         []Service         `json:"services,omitempty"`
	Warehouses       []Warehouse       `json:"warehouses,omitempty"`
}
