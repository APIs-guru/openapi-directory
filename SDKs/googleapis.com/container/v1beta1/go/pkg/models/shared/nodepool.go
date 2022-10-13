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
	Autoscaling       *NodePoolAutoscaling `json:"autoscaling"`
	Conditions        []StatusCondition    `json:"conditions"`
	Config            *NodeConfig          `json:"config"`
	InitialNodeCount  *int32               `json:"initialNodeCount"`
	InstanceGroupUrls []string             `json:"instanceGroupUrls"`
	Locations         []string             `json:"locations"`
	Management        *NodeManagement      `json:"management"`
	MaxPodsConstraint *MaxPodsConstraint   `json:"maxPodsConstraint"`
	Name              *string              `json:"name"`
	NetworkConfig     *NodeNetworkConfig   `json:"networkConfig"`
	PlacementPolicy   *PlacementPolicy     `json:"placementPolicy"`
	PodIpv4CidrSize   *int32               `json:"podIpv4CidrSize"`
	SelfLink          *string              `json:"selfLink"`
	Status            *NodePoolStatusEnum  `json:"status"`
	StatusMessage     *string              `json:"statusMessage"`
	UpdateInfo        *UpdateInfo          `json:"updateInfo"`
	UpgradeSettings   *UpgradeSettings     `json:"upgradeSettings"`
	Version           *string              `json:"version"`
}
