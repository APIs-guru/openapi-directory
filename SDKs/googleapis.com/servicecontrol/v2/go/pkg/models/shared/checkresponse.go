package shared

// CheckResponse
// Response message for the Check method.
type CheckResponse struct {
	Headers map[string]string `json:"headers,omitempty"`
	Status  *Status           `json:"status,omitempty"`
}
