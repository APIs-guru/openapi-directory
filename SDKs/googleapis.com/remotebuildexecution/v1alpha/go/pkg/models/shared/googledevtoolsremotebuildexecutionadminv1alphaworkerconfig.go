package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig struct {
	Accelerator          *GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig `json:"accelerator"`
	DiskSizeGb           *string                                                          `json:"diskSizeGb"`
	DiskType             *string                                                          `json:"diskType"`
	Labels               map[string]string                                                `json:"labels"`
	MachineType          *string                                                          `json:"machineType"`
	MaxConcurrentActions *string                                                          `json:"maxConcurrentActions"`
	MinCPUPlatform       *string                                                          `json:"minCpuPlatform"`
	NetworkAccess        *string                                                          `json:"networkAccess"`
	Reserved             *bool                                                            `json:"reserved"`
	SoleTenantNodeType   *string                                                          `json:"soleTenantNodeType"`
	VMImage              *string                                                          `json:"vmImage"`
}
