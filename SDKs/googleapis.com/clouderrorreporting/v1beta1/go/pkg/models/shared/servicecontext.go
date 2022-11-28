package shared

// ServiceContext
// Describes a running service that sends errors. Its version changes over time and multiple versions can run in parallel.
type ServiceContext struct {
	ResourceType *string `json:"resourceType,omitempty"`
	Service      *string `json:"service,omitempty"`
	Version      *string `json:"version,omitempty"`
}
