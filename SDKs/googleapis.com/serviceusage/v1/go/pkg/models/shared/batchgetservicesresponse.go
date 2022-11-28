package shared

// BatchGetServicesResponse
// Response message for the `BatchGetServices` method.
type BatchGetServicesResponse struct {
	Services []GoogleAPIServiceusageV1Service `json:"services,omitempty"`
}
