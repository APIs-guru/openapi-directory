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
// NodePool contains the name and configuration for a cluster's node pool. Node pools are a set of nodes (i.e. VM's), with a common configuration and specification, under the control of the cluster master. They may have a set of Kubernetes labels applied to them, which may be used to reference them during pod scheduling. They may also be resized up or down, to accommodate the workload. These upgrade settings control the level of parallelism and the level of disruption caused by an upgrade. maxUnavailable controls the number of nodes that can be simultaneously unavailable. maxSurge controls the number of additional nodes that can be added to the node pool temporarily for the time of the upgrade to increase the number of available nodes. (maxUnavailable + maxSurge) determines the level of parallelism (how many nodes are being upgraded at the same time). Note: upgrades inevitably introduce some disruption since workloads need to be moved from old nodes to new, upgraded ones. Even if maxUnavailable=0, this holds true. (Disruption stays within the limits of PodDisruptionBudget, if it is configured.) Consider a hypothetical node pool with 5 nodes having maxSurge=2, maxUnavailable=1. This means the upgrade process upgrades 3 nodes simultaneously. It creates 2 additional (upgraded) nodes, then it brings down 3 old (not yet upgraded) nodes at the same time. This ensures that there are always at least 4 nodes available.
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
