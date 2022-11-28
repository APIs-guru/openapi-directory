package shared

// WorkerConfig
// WorkerConfig defines the configuration to be used for a creating workers in the pool.
type WorkerConfig struct {
	DiskSizeGb  *string  `json:"diskSizeGb,omitempty"`
	MachineType *string  `json:"machineType,omitempty"`
	Network     *Network `json:"network,omitempty"`
	Tag         *string  `json:"tag,omitempty"`
}
