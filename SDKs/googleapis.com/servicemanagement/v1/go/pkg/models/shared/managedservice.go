package shared

type ManagedService struct {
	ProducerProjectID *string `json:"producerProjectId,omitempty"`
	ServiceName       *string `json:"serviceName,omitempty"`
}
