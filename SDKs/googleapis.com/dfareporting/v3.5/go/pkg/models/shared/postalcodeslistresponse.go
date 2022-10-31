package shared

type PostalCodesListResponse struct {
	Kind        *string      `json:"kind,omitempty"`
	PostalCodes []PostalCode `json:"postalCodes,omitempty"`
}
