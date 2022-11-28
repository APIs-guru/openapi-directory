package shared

// PrivatePoolV1Config
// Configuration for a V1 `PrivatePool`.
type PrivatePoolV1Config struct {
	NetworkConfig *NetworkConfig `json:"networkConfig,omitempty"`
	WorkerConfig  *WorkerConfig  `json:"workerConfig,omitempty"`
}
