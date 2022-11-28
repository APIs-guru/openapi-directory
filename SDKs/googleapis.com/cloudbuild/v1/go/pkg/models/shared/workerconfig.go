package shared

// WorkerConfig
// Defines the configuration to be used for creating workers in the pool.
type WorkerConfig struct {
	DiskSizeGb  *string `json:"diskSizeGb,omitempty"`
	MachineType *string `json:"machineType,omitempty"`
}
