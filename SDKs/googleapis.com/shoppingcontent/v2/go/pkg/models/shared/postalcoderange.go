package shared

type PostalCodeRange struct {
	PostalCodeRangeBegin *string `json:"postalCodeRangeBegin,omitempty"`
	PostalCodeRangeEnd   *string `json:"postalCodeRangeEnd,omitempty"`
}
