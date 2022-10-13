package shared

type NoContent struct {
	Error   *string `json:"error"`
	Message *string `json:"message"`
	Status  *int64  `json:"status"`
}
