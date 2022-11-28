package shared

// BadResponse
// An HTTP response that is not supposed to be returned by a service
type BadResponse struct {
	Body    string            `json:"body"`
	Headers map[string]string `json:"headers"`
	Status  int32             `json:"status"`
}
