package shared

// RegionPostalCodeArea
// A list of postal codes that defines the region area. Note: All regions defined using postal codes are accessible via the account's `ShippingSettings.postalCodeGroups` resource.
type RegionPostalCodeArea struct {
	PostalCodes []RegionPostalCodeAreaPostalCodeRange `json:"postalCodes,omitempty"`
	RegionCode  *string                               `json:"regionCode,omitempty"`
}
