package shared

// ServiceMeshStatusDetails
// Structured and human-readable details for a status.
type ServiceMeshStatusDetails struct {
	Code    *string `json:"code,omitempty"`
	Details *string `json:"details,omitempty"`
}
