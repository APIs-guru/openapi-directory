package shared

type NodeAPIVersionEnum string

const (
	NodeAPIVersionEnumAPIVersionUnspecified NodeAPIVersionEnum = "API_VERSION_UNSPECIFIED"
	NodeAPIVersionEnumV1Alpha1              NodeAPIVersionEnum = "V1_ALPHA1"
	NodeAPIVersionEnumV1                    NodeAPIVersionEnum = "V1"
	NodeAPIVersionEnumV2Alpha1              NodeAPIVersionEnum = "V2_ALPHA1"
)

type NodeHealthEnum string

const (
	NodeHealthEnumHealthUnspecified    NodeHealthEnum = "HEALTH_UNSPECIFIED"
	NodeHealthEnumHealthy              NodeHealthEnum = "HEALTHY"
	NodeHealthEnumTimeout              NodeHealthEnum = "TIMEOUT"
	NodeHealthEnumUnhealthyTensorflow  NodeHealthEnum = "UNHEALTHY_TENSORFLOW"
	NodeHealthEnumUnhealthyMaintenance NodeHealthEnum = "UNHEALTHY_MAINTENANCE"
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

type Node struct {
	AcceleratorType        *string                 `json:"acceleratorType"`
	APIVersion             *NodeAPIVersionEnum     `json:"apiVersion"`
	CidrBlock              *string                 `json:"cidrBlock"`
	CreateTime             *string                 `json:"createTime"`
	DataDisks              []AttachedDisk          `json:"dataDisks"`
	Description            *string                 `json:"description"`
	Health                 *NodeHealthEnum         `json:"health"`
	HealthDescription      *string                 `json:"healthDescription"`
	ID                     *string                 `json:"id"`
	Labels                 map[string]string       `json:"labels"`
	Metadata               map[string]string       `json:"metadata"`
	Name                   *string                 `json:"name"`
	NetworkConfig          *NetworkConfig          `json:"networkConfig"`
	NetworkEndpoints       []NetworkEndpoint       `json:"networkEndpoints"`
	RuntimeVersion         *string                 `json:"runtimeVersion"`
	SchedulingConfig       *SchedulingConfig       `json:"schedulingConfig"`
	ServiceAccount         *ServiceAccount         `json:"serviceAccount"`
	ShieldedInstanceConfig *ShieldedInstanceConfig `json:"shieldedInstanceConfig"`
	State                  *NodeStateEnum          `json:"state"`
	Symptoms               []Symptom               `json:"symptoms"`
	Tags                   []string                `json:"tags"`
}
