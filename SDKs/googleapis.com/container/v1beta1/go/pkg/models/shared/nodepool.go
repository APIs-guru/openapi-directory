package shared

type NodePoolStatusEnum string

const (
	NodePoolStatusEnumStatusUnspecified NodePoolStatusEnum = "STATUS_UNSPECIFIED"
	NodePoolStatusEnumProvisioning      NodePoolStatusEnum = "PROVISIONING"
	NodePoolStatusEnumRunning           NodePoolStatusEnum = "RUNNING"
	NodePoolStatusEnumRunningWithError  NodePoolStatusEnum = "RUNNING_WITH_ERROR"
	NodePoolStatusEnumReconciling       NodePoolStatusEnum = "RECONCILING"
	NodePoolStatusEnumStopping          NodePoolStatusEnum = "STOPPING"
	NodePoolStatusEnumError             NodePoolStatusEnum = "ERROR"
)

type NodePool struct {
	Autoscaling       *NodePoolAutoscaling `json:"autoscaling,omitempty"`
	Conditions        []StatusCondition    `json:"conditions,omitempty"`
	Config            *NodeConfig          `json:"config,omitempty"`
	InitialNodeCount  *int32               `json:"initialNodeCount,omitempty"`
	InstanceGroupUrls []string             `json:"instanceGroupUrls,omitempty"`
	Locations         []string             `json:"locations,omitempty"`
	Management        *NodeManagement      `json:"management,omitempty"`
	MaxPodsConstraint *MaxPodsConstraint   `json:"maxPodsConstraint,omitempty"`
	Name              *string              `json:"name,omitempty"`
	NetworkConfig     *NodeNetworkConfig   `json:"networkConfig,omitempty"`
	PlacementPolicy   *PlacementPolicy     `json:"placementPolicy,omitempty"`
	PodIpv4CidrSize   *int32               `json:"podIpv4CidrSize,omitempty"`
	SelfLink          *string              `json:"selfLink,omitempty"`
	Status            *NodePoolStatusEnum  `json:"status,omitempty"`
	StatusMessage     *string              `json:"statusMessage,omitempty"`
	UpdateInfo        *UpdateInfo          `json:"updateInfo,omitempty"`
	UpgradeSettings   *UpgradeSettings     `json:"upgradeSettings,omitempty"`
	Version           *string              `json:"version,omitempty"`
}
