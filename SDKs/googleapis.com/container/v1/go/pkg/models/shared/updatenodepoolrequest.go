package shared

type UpdateNodePoolRequest struct {
	ClusterID              *string                 `json:"clusterId"`
	ConfidentialNodes      *ConfidentialNodes      `json:"confidentialNodes"`
	GcfsConfig             *GcfsConfig             `json:"gcfsConfig"`
	Gvnic                  *VirtualNic             `json:"gvnic"`
	ImageType              *string                 `json:"imageType"`
	KubeletConfig          *NodeKubeletConfig      `json:"kubeletConfig"`
	Labels                 *NodeLabels             `json:"labels"`
	LinuxNodeConfig        *LinuxNodeConfig        `json:"linuxNodeConfig"`
	Locations              []string                `json:"locations"`
	LoggingConfig          *NodePoolLoggingConfig  `json:"loggingConfig"`
	Name                   *string                 `json:"name"`
	NodeNetworkConfig      *NodeNetworkConfig      `json:"nodeNetworkConfig"`
	NodePoolID             *string                 `json:"nodePoolId"`
	NodeVersion            *string                 `json:"nodeVersion"`
	ProjectID              *string                 `json:"projectId"`
	Tags                   *NetworkTags            `json:"tags"`
	Taints                 *NodeTaints             `json:"taints"`
	UpgradeSettings        *UpgradeSettings        `json:"upgradeSettings"`
	WorkloadMetadataConfig *WorkloadMetadataConfig `json:"workloadMetadataConfig"`
	Zone                   *string                 `json:"zone"`
}
