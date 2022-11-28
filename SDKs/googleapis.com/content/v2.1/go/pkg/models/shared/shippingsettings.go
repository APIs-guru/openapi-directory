package shared

// ShippingSettings
// The merchant account's shipping settings. All methods except getsupportedcarriers and getsupportedholidays require the admin role.
type ShippingSettings struct {
	AccountID        *string           `json:"accountId,omitempty"`
	PostalCodeGroups []PostalCodeGroup `json:"postalCodeGroups,omitempty"`
	Services         []Service         `json:"services,omitempty"`
	Warehouses       []Warehouse       `json:"warehouses,omitempty"`
}
