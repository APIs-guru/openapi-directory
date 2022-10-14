package shared

type AddressSearchResponseSchema struct {
	Code    *int32               `json:"code,omitempty"`
	Message *string              `json:"message,omitempty"`
	Result  *AddressSearchResult `json:"result,omitempty"`
}
