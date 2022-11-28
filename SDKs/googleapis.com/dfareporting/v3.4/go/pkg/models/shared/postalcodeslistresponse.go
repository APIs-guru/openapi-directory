package shared

// PostalCodesListResponse
// Postal Code List Response
type PostalCodesListResponse struct {
	Kind        *string      `json:"kind,omitempty"`
	PostalCodes []PostalCode `json:"postalCodes,omitempty"`
}
