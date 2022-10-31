package shared

type PostalCodeGroup struct {
	Country          *string           `json:"country,omitempty"`
	Name             *string           `json:"name,omitempty"`
	PostalCodeRanges []PostalCodeRange `json:"postalCodeRanges,omitempty"`
}
