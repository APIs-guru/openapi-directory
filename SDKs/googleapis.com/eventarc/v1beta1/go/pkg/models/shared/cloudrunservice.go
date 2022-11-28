package shared

// CloudRunService
// Represents a Cloud Run service destination.
type CloudRunService struct {
	Path    *string `json:"path,omitempty"`
	Region  *string `json:"region,omitempty"`
	Service *string `json:"service,omitempty"`
}
