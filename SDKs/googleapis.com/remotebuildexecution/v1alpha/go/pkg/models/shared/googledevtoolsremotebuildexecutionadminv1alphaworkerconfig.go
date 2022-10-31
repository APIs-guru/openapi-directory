package shared

type GoogleDevtoolsRemotebuildexecutionAdminV1alphaWorkerConfig struct {
	Accelerator          *GoogleDevtoolsRemotebuildexecutionAdminV1alphaAcceleratorConfig `json:"accelerator,omitempty"`
	DiskSizeGb           *string                                                          `json:"diskSizeGb,omitempty"`
	DiskType             *string                                                          `json:"diskType,omitempty"`
	Labels               map[string]string                                                `json:"labels,omitempty"`
	MachineType          *string                                                          `json:"machineType,omitempty"`
	MaxConcurrentActions *string                                                          `json:"maxConcurrentActions,omitempty"`
	MinCPUPlatform       *string                                                          `json:"minCpuPlatform,omitempty"`
	NetworkAccess        *string                                                          `json:"networkAccess,omitempty"`
	Reserved             *bool                                                            `json:"reserved,omitempty"`
	SoleTenantNodeType   *string                                                          `json:"soleTenantNodeType,omitempty"`
	VMImage              *string                                                          `json:"vmImage,omitempty"`
}
