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
	AcceleratorType      *string             `json:"acceleratorType"`
	APIVersion           *NodeAPIVersionEnum `json:"apiVersion"`
	CidrBlock            *string             `json:"cidrBlock"`
	CreateTime           *string             `json:"createTime"`
	Description          *string             `json:"description"`
	Health               *NodeHealthEnum     `json:"health"`
	HealthDescription    *string             `json:"healthDescription"`
	IPAddress            *string             `json:"ipAddress"`
	Labels               map[string]string   `json:"labels"`
	Name                 *string             `json:"name"`
	Network              *string             `json:"network"`
	NetworkEndpoints     []NetworkEndpoint   `json:"networkEndpoints"`
	Port                 *string             `json:"port"`
	SchedulingConfig     *SchedulingConfig   `json:"schedulingConfig"`
	ServiceAccount       *string             `json:"serviceAccount"`
	State                *NodeStateEnum      `json:"state"`
	Symptoms             []Symptom           `json:"symptoms"`
	TensorflowVersion    *string             `json:"tensorflowVersion"`
	UseServiceNetworking *bool               `json:"useServiceNetworking"`
}
