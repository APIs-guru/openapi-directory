package shared

type NodeAPIVersionEnum string

const (
	NodeAPIVersionEnumAPIVersionUnspecified NodeAPIVersionEnum = "API_VERSION_UNSPECIFIED"
	NodeAPIVersionEnumV1Alpha1              NodeAPIVersionEnum = "V1_ALPHA1"
	NodeAPIVersionEnumV1                    NodeAPIVersionEnum = "V1"
	NodeAPIVersionEnumV2Alpha1              NodeAPIVersionEnum = "V2_ALPHA1"
	NodeAPIVersionEnumV2                    NodeAPIVersionEnum = "V2"
)

type NodeStateEnum string

const (
	NodeStateEnumStateUnspecified NodeStateEnum = "STATE_UNSPECIFIED"
	NodeStateEnumCreating         NodeStateEnum = "CREATING"
	NodeStateEnumReady            NodeStateEnum = "READY"
	NodeStateEnumRestarting       NodeStateEnum = "RESTARTING"
	NodeStateEnumReimaging        NodeStateEnum = "REIMAGING"
	NodeStateEnumDeleting         NodeStateEnum = "DELETING"
	NodeStateEnumRepairing        NodeStateEnum = "REPAIRING"
	NodeStateEnumStopped          NodeStateEnum = "STOPPED"
	NodeStateEnumStopping         NodeStateEnum = "STOPPING"
	NodeStateEnumStarting         NodeStateEnum = "STARTING"
	NodeStateEnumPreempted        NodeStateEnum = "PREEMPTED"
	NodeStateEnumTerminated       NodeStateEnum = "TERMINATED"
	NodeStateEnumHiding           NodeStateEnum = "HIDING"
	NodeStateEnumHidden           NodeStateEnum = "HIDDEN"
	NodeStateEnumUnhiding         NodeStateEnum = "UNHIDING"
)

type NodeHealthEnum string

const (
	NodeHealthEnumHealthUnspecified    NodeHealthEnum = "HEALTH_UNSPECIFIED"
	NodeHealthEnumHealthy              NodeHealthEnum = "HEALTHY"
	NodeHealthEnumTimeout              NodeHealthEnum = "TIMEOUT"
	NodeHealthEnumUnhealthyTensorflow  NodeHealthEnum = "UNHEALTHY_TENSORFLOW"
	NodeHealthEnumUnhealthyMaintenance NodeHealthEnum = "UNHEALTHY_MAINTENANCE"
)

// Node
// A TPU instance.
type Node struct {
	AcceleratorType        *string                 `json:"acceleratorType,omitempty"`
	APIVersion             *NodeAPIVersionEnum     `json:"apiVersion,omitempty"`
	CidrBlock              *string                 `json:"cidrBlock,omitempty"`
	CreateTime             *string                 `json:"createTime,omitempty"`
	DataDisks              []AttachedDisk          `json:"dataDisks,omitempty"`
	Description            *string                 `json:"description,omitempty"`
	Health                 *NodeHealthEnum         `json:"health,omitempty"`
	HealthDescription      *string                 `json:"healthDescription,omitempty"`
	ID                     *string                 `json:"id,omitempty"`
	Labels                 map[string]string       `json:"labels,omitempty"`
	Metadata               map[string]string       `json:"metadata,omitempty"`
	Name                   *string                 `json:"name,omitempty"`
	NetworkConfig          *NetworkConfig          `json:"networkConfig,omitempty"`
	NetworkEndpoints       []NetworkEndpoint       `json:"networkEndpoints,omitempty"`
	RuntimeVersion         *string                 `json:"runtimeVersion,omitempty"`
	SchedulingConfig       *SchedulingConfig       `json:"schedulingConfig,omitempty"`
	ServiceAccount         *ServiceAccount         `json:"serviceAccount,omitempty"`
	ShieldedInstanceConfig *ShieldedInstanceConfig `json:"shieldedInstanceConfig,omitempty"`
	State                  *NodeStateEnum          `json:"state,omitempty"`
	Symptoms               []Symptom               `json:"symptoms,omitempty"`
	Tags                   []string                `json:"tags,omitempty"`
}

// NodeInput
// A TPU instance.
type NodeInput struct {
	AcceleratorType        *string                 `json:"acceleratorType,omitempty"`
	CidrBlock              *string                 `json:"cidrBlock,omitempty"`
	DataDisks              []AttachedDisk          `json:"dataDisks,omitempty"`
	Description            *string                 `json:"description,omitempty"`
	Health                 *NodeHealthEnum         `json:"health,omitempty"`
	Labels                 map[string]string       `json:"labels,omitempty"`
	Metadata               map[string]string       `json:"metadata,omitempty"`
	NetworkConfig          *NetworkConfig          `json:"networkConfig,omitempty"`
	RuntimeVersion         *string                 `json:"runtimeVersion,omitempty"`
	SchedulingConfig       *SchedulingConfig       `json:"schedulingConfig,omitempty"`
	ServiceAccount         *ServiceAccount         `json:"serviceAccount,omitempty"`
	ShieldedInstanceConfig *ShieldedInstanceConfig `json:"shieldedInstanceConfig,omitempty"`
	Tags                   []string                `json:"tags,omitempty"`
}
