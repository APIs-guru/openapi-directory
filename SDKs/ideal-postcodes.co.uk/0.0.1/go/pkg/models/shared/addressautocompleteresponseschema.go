package shared

type AddressAutocompleteResponseSchema struct {
	Code    *int32                     `json:"code"`
	Message *string                    `json:"message"`
	Result  *AddressAutocompleteResult `json:"result"`
}
