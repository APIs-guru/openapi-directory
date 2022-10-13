package shared

type PostalCodeGroup struct {
	Country          *string           `json:"country"`
	Name             *string           `json:"name"`
	PostalCodeRanges []PostalCodeRange `json:"postalCodeRanges"`
}
