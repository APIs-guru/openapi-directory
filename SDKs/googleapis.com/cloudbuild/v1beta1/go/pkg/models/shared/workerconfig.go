package shared



type WorkerConfig struct {
    DiskSizeGb *string `json:"diskSizeGb,omitempty"`
    MachineType *string `json:"machineType,omitempty"`
    NoExternalIP *bool `json:"noExternalIp,omitempty"`
    
}

