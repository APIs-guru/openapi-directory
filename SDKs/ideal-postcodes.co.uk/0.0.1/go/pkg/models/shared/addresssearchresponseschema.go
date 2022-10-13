package shared

type AddressSearchResponseSchema struct {
	Code    *int32               `json:"code"`
	Message *string              `json:"message"`
	Result  *AddressSearchResult `json:"result"`
}
