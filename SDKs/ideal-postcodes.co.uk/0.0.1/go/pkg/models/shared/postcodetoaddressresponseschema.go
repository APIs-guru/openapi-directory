package shared

type PostcodeToAddressResponseSchema struct {
	Code    *int32    `json:"code"`
	Message *string   `json:"message"`
	Result  []Address `json:"result"`
}
