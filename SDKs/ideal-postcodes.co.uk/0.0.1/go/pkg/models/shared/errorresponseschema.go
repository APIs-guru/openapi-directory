package shared

type ErrorResponseSchema struct {
	Code    *int32  `json:"code"`
	Message *string `json:"message"`
}
