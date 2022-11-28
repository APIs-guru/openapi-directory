package shared

// ManagedService
// The full representation of a Service that is managed by Google Service Management.
type ManagedService struct {
	ProducerProjectID *string `json:"producerProjectId,omitempty"`
	ServiceName       *string `json:"serviceName,omitempty"`
}
