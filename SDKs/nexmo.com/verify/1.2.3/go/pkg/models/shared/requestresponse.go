package shared

// RequestResponse
// Success
type RequestResponse struct {
	RequestID *string `json:"request_id,omitempty"`
	Status    *string `json:"status,omitempty"`
}
