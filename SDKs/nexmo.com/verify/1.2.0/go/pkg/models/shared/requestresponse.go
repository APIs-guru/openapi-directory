package shared

type RequestResponse struct {
	RequestID *string `json:"request_id"`
	Status    *string `json:"status"`
}
