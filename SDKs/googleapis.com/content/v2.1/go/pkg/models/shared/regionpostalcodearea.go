package shared

type RegionPostalCodeArea struct {
	PostalCodes []RegionPostalCodeAreaPostalCodeRange `json:"postalCodes,omitempty"`
	RegionCode  *string                               `json:"regionCode,omitempty"`
}
