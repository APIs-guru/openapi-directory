package shared

type LicenseeListResponseSchema struct {
	Code    *int32              `json:"code"`
	Message *string             `json:"message"`
	Result  *LicenseeListResult `json:"result"`
}
