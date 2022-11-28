package shared

// Response
// This message defines attributes for a typical network response. It generally models semantics of an HTTP response.
type Response struct {
	BackendLatency *string           `json:"backendLatency,omitempty"`
	Code           *string           `json:"code,omitempty"`
	Headers        map[string]string `json:"headers,omitempty"`
	Size           *string           `json:"size,omitempty"`
	Time           *string           `json:"time,omitempty"`
}
