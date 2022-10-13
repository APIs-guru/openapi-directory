package shared

type RegionPostalCodeArea struct {
	PostalCodes []RegionPostalCodeAreaPostalCodeRange `json:"postalCodes"`
	RegionCode  *string                               `json:"regionCode"`
}
