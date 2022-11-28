package shared

// NetworkConfigInput
// Network configuration for the Dataproc Metastore service.
type NetworkConfigInput struct {
	Consumers []ConsumerInput `json:"consumers,omitempty"`
}

// NetworkConfig
// Network configuration for the Dataproc Metastore service.
type NetworkConfig struct {
	Consumers []Consumer `json:"consumers,omitempty"`
}
