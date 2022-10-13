package shared

type ErrorNotFound struct {
	Error   *string `json:"error"`
	Message *string `json:"message"`
	Status  *int64  `json:"status"`
}
