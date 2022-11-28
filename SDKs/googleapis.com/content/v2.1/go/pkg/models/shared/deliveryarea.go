package shared

// DeliveryArea
// A delivery area for the product. Only one of `countryCode` or `postalCodeRange` must be set.
type DeliveryArea struct {
	CountryCode     *string                      `json:"countryCode,omitempty"`
	PostalCodeRange *DeliveryAreaPostalCodeRange `json:"postalCodeRange,omitempty"`
	RegionCode      *string                      `json:"regionCode,omitempty"`
}
