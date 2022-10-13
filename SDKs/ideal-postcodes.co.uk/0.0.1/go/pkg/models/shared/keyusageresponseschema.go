package shared

type KeyUsageResponseSchema struct {
	Code    *int32          `json:"code"`
	Message *string         `json:"message"`
	Result  *KeyUsageResult `json:"result"`
}
