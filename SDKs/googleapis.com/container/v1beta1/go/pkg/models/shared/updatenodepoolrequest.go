package shared

type UpdateNodePoolRequest struct {
	ClusterID              *string                 `json:"clusterId,omitempty"`
	ConfidentialNodes      *ConfidentialNodes      `json:"confidentialNodes,omitempty"`
	GcfsConfig             *GcfsConfig             `json:"gcfsConfig,omitempty"`
	Gvnic                  *VirtualNic             `json:"gvnic,omitempty"`
	ImageType              *string                 `json:"imageType,omitempty"`
	KubeletConfig          *NodeKubeletConfig      `json:"kubeletConfig,omitempty"`
	Labels                 *NodeLabels             `json:"labels,omitempty"`
	LinuxNodeConfig        *LinuxNodeConfig        `json:"linuxNodeConfig,omitempty"`
	Locations              []string                `json:"locations,omitempty"`
	LoggingConfig          *NodePoolLoggingConfig  `json:"loggingConfig,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	NodeNetworkConfig      *NodeNetworkConfig      `json:"nodeNetworkConfig,omitempty"`
	NodePoolID             *string                 `json:"nodePoolId,omitempty"`
	NodeVersion            *string                 `json:"nodeVersion,omitempty"`
	ProjectID              *string                 `json:"projectId,omitempty"`
	Tags                   *NetworkTags            `json:"tags,omitempty"`
	Taints                 *NodeTaints             `json:"taints,omitempty"`
	UpgradeSettings        *UpgradeSettings        `json:"upgradeSettings,omitempty"`
	WorkloadMetadataConfig *WorkloadMetadataConfig `json:"workloadMetadataConfig,omitempty"`
	Zone                   *string                 `json:"zone,omitempty"`
}
