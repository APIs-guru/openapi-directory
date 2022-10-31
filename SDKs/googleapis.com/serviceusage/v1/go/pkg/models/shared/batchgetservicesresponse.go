package shared

type BatchGetServicesResponse struct {
	Services []GoogleAPIServiceusageV1Service `json:"services,omitempty"`
}
