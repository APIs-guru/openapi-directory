package shared

// NetworkConfig
// Network describes the network configuration for a `WorkerPool`.
type NetworkConfig struct {
	PeeredNetwork *string `json:"peeredNetwork,omitempty"`
}
