package shared

// NetworkConfig
// Network configuration for the Dataproc Metastore service.
type NetworkConfig struct {
	Consumers []Consumer `json:"consumers,omitempty"`
}

// NetworkConfigInput
// Network configuration for the Dataproc Metastore service.
type NetworkConfigInput struct {
	Consumers []ConsumerInput `json:"consumers,omitempty"`
}
