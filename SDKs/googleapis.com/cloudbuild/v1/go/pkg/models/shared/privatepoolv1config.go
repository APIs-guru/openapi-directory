package shared

type PrivatePoolV1Config struct {
	NetworkConfig *NetworkConfig `json:"networkConfig"`
	WorkerConfig  *WorkerConfig  `json:"workerConfig"`
}
