package shared

// NodeConfig
// Parameters that describe the nodes in a cluster. GKE Autopilot clusters do not recognize parameters in `NodeConfig`. Use AutoprovisioningNodePoolDefaults instead.
type NodeConfig struct {
	Accelerators            []AcceleratorConfig      `json:"accelerators,omitempty"`
	AdvancedMachineFeatures *AdvancedMachineFeatures `json:"advancedMachineFeatures,omitempty"`
	BootDiskKmsKey          *string                  `json:"bootDiskKmsKey,omitempty"`
	ConfidentialNodes       *ConfidentialNodes       `json:"confidentialNodes,omitempty"`
	DiskSizeGb              *int32                   `json:"diskSizeGb,omitempty"`
	DiskType                *string                  `json:"diskType,omitempty"`
	EphemeralStorageConfig  *EphemeralStorageConfig  `json:"ephemeralStorageConfig,omitempty"`
	FastSocket              *FastSocket              `json:"fastSocket,omitempty"`
	GcfsConfig              *GcfsConfig              `json:"gcfsConfig,omitempty"`
	Gvnic                   *VirtualNic              `json:"gvnic,omitempty"`
	ImageType               *string                  `json:"imageType,omitempty"`
	KubeletConfig           *NodeKubeletConfig       `json:"kubeletConfig,omitempty"`
	Labels                  map[string]string        `json:"labels,omitempty"`
	LinuxNodeConfig         *LinuxNodeConfig         `json:"linuxNodeConfig,omitempty"`
	LocalSsdCount           *int32                   `json:"localSsdCount,omitempty"`
	LoggingConfig           *NodePoolLoggingConfig   `json:"loggingConfig,omitempty"`
	MachineType             *string                  `json:"machineType,omitempty"`
	Metadata                map[string]string        `json:"metadata,omitempty"`
	MinCPUPlatform          *string                  `json:"minCpuPlatform,omitempty"`
	NodeGroup               *string                  `json:"nodeGroup,omitempty"`
	OauthScopes             []string                 `json:"oauthScopes,omitempty"`
	Preemptible             *bool                    `json:"preemptible,omitempty"`
	ReservationAffinity     *ReservationAffinity     `json:"reservationAffinity,omitempty"`
	ResourceLabels          map[string]string        `json:"resourceLabels,omitempty"`
	SandboxConfig           *SandboxConfig           `json:"sandboxConfig,omitempty"`
	ServiceAccount          *string                  `json:"serviceAccount,omitempty"`
	ShieldedInstanceConfig  *ShieldedInstanceConfig  `json:"shieldedInstanceConfig,omitempty"`
	Spot                    *bool                    `json:"spot,omitempty"`
	Tags                    []string                 `json:"tags,omitempty"`
	Taints                  []NodeTaint              `json:"taints,omitempty"`
	WorkloadMetadataConfig  *WorkloadMetadataConfig  `json:"workloadMetadataConfig,omitempty"`
}
