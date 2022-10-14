package shared

type AddressAutocompleteResponseSchema struct {
	Code    *int32                     `json:"code,omitempty"`
	Message *string                    `json:"message,omitempty"`
	Result  *AddressAutocompleteResult `json:"result,omitempty"`
}
