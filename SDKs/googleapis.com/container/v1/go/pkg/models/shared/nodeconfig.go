package shared

type NodeConfig struct {
	Accelerators            []AcceleratorConfig      `json:"accelerators"`
	AdvancedMachineFeatures *AdvancedMachineFeatures `json:"advancedMachineFeatures"`
	BootDiskKmsKey          *string                  `json:"bootDiskKmsKey"`
	ConfidentialNodes       *ConfidentialNodes       `json:"confidentialNodes"`
	DiskSizeGb              *int32                   `json:"diskSizeGb"`
	DiskType                *string                  `json:"diskType"`
	GcfsConfig              *GcfsConfig              `json:"gcfsConfig"`
	Gvnic                   *VirtualNic              `json:"gvnic"`
	ImageType               *string                  `json:"imageType"`
	KubeletConfig           *NodeKubeletConfig       `json:"kubeletConfig"`
	Labels                  map[string]string        `json:"labels"`
	LinuxNodeConfig         *LinuxNodeConfig         `json:"linuxNodeConfig"`
	LocalSsdCount           *int32                   `json:"localSsdCount"`
	LoggingConfig           *NodePoolLoggingConfig   `json:"loggingConfig"`
	MachineType             *string                  `json:"machineType"`
	Metadata                map[string]string        `json:"metadata"`
	MinCPUPlatform          *string                  `json:"minCpuPlatform"`
	NodeGroup               *string                  `json:"nodeGroup"`
	OauthScopes             []string                 `json:"oauthScopes"`
	Preemptible             *bool                    `json:"preemptible"`
	ReservationAffinity     *ReservationAffinity     `json:"reservationAffinity"`
	SandboxConfig           *SandboxConfig           `json:"sandboxConfig"`
	ServiceAccount          *string                  `json:"serviceAccount"`
	ShieldedInstanceConfig  *ShieldedInstanceConfig  `json:"shieldedInstanceConfig"`
	Spot                    *bool                    `json:"spot"`
	Tags                    []string                 `json:"tags"`
	Taints                  []NodeTaint              `json:"taints"`
	WorkloadMetadataConfig  *WorkloadMetadataConfig  `json:"workloadMetadataConfig"`
}
