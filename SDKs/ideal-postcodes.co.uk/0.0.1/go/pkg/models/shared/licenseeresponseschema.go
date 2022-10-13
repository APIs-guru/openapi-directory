package shared

type LicenseeResponseSchema struct {
	Code    *int32    `json:"code"`
	Message *string   `json:"message"`
	Result  *Licensee `json:"result"`
}
