package shared

// DatabaseFlags
// Database flags for Cloud SQL instances.
type DatabaseFlags struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
