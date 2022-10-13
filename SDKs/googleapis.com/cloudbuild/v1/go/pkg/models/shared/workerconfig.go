package shared

type WorkerConfig struct {
	DiskSizeGb  *string `json:"diskSizeGb"`
	MachineType *string `json:"machineType"`
}
