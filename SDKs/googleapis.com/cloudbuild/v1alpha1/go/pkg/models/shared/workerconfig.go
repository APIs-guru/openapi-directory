package shared

type WorkerConfig struct {
	DiskSizeGb  *string  `json:"diskSizeGb,omitempty"`
	MachineType *string  `json:"machineType,omitempty"`
	Network     *Network `json:"network,omitempty"`
	Tag         *string  `json:"tag,omitempty"`
}
