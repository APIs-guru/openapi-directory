package shared

type ErrorUnauthorized struct {
	Error   *string `json:"error"`
	Message *string `json:"message"`
	Status  *int64  `json:"status"`
}
