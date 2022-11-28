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

// NodePool
// NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload.
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
