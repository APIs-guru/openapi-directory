package shared

// Backend
// `Backend` defines the backend configuration for a service.
type Backend struct {
	Rules []BackendRule `json:"rules,omitempty"`
}
