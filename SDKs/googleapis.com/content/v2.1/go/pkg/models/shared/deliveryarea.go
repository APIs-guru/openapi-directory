package shared

type DeliveryArea struct {
	CountryCode     *string                      `json:"countryCode"`
	PostalCodeRange *DeliveryAreaPostalCodeRange `json:"postalCodeRange"`
	RegionCode      *string                      `json:"regionCode"`
}
