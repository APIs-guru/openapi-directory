package shared

// CloudRun
// Represents a Cloud Run destination.
type CloudRun struct {
	Path    *string `json:"path,omitempty"`
	Region  *string `json:"region,omitempty"`
	Service *string `json:"service,omitempty"`
}
