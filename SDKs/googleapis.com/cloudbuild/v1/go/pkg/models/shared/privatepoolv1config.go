package shared

type PrivatePoolV1Config struct {
	NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
	WorkerConfig  *WorkerConfig  `json:"workerConfig,omitempty"`
}
