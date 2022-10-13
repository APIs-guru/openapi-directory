package shared

type KeyUsabilityResponseSchema struct {
	Code    *int32              `json:"code"`
	Message *string             `json:"message"`
	Result  *KeyUsabilityResult `json:"result"`
}
