package shared

type PostalCodesListResponse struct {
	Kind        *string      `json:"kind"`
	PostalCodes []PostalCode `json:"postalCodes"`
}
