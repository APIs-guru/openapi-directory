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
	NodeHealthEnumDeprecatedUnhealthy  NodeHealthEnum = "DEPRECATED_UNHEALTHY"
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
	AcceleratorType      *string             `json:"acceleratorType,omitempty"`
	APIVersion           *NodeAPIVersionEnum `json:"apiVersion,omitempty"`
	CidrBlock            *string             `json:"cidrBlock,omitempty"`
	CreateTime           *string             `json:"createTime,omitempty"`
	Description          *string             `json:"description,omitempty"`
	Health               *NodeHealthEnum     `json:"health,omitempty"`
	HealthDescription    *string             `json:"healthDescription,omitempty"`
	IPAddress            *string             `json:"ipAddress,omitempty"`
	Labels               map[string]string   `json:"labels,omitempty"`
	Name                 *string             `json:"name,omitempty"`
	Network              *string             `json:"network,omitempty"`
	NetworkEndpoints     []NetworkEndpoint   `json:"networkEndpoints,omitempty"`
	Port                 *string             `json:"port,omitempty"`
	SchedulingConfig     *SchedulingConfig   `json:"schedulingConfig,omitempty"`
	ServiceAccount       *string             `json:"serviceAccount,omitempty"`
	State                *NodeStateEnum      `json:"state,omitempty"`
	Symptoms             []Symptom           `json:"symptoms,omitempty"`
	TensorflowVersion    *string             `json:"tensorflowVersion,omitempty"`
	UseServiceNetworking *bool               `json:"useServiceNetworking,omitempty"`
}
