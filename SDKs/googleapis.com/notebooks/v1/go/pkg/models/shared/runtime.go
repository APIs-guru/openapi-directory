package shared

type RuntimeHealthStateEnum string

const (
	RuntimeHealthStateEnumHealthStateUnspecified RuntimeHealthStateEnum = "HEALTH_STATE_UNSPECIFIED"
	RuntimeHealthStateEnumHealthy                RuntimeHealthStateEnum = "HEALTHY"
	RuntimeHealthStateEnumUnhealthy              RuntimeHealthStateEnum = "UNHEALTHY"
	RuntimeHealthStateEnumAgentNotInstalled      RuntimeHealthStateEnum = "AGENT_NOT_INSTALLED"
	RuntimeHealthStateEnumAgentNotRunning        RuntimeHealthStateEnum = "AGENT_NOT_RUNNING"
)

type RuntimeStateEnum string

const (
	RuntimeStateEnumStateUnspecified RuntimeStateEnum = "STATE_UNSPECIFIED"
	RuntimeStateEnumStarting         RuntimeStateEnum = "STARTING"
	RuntimeStateEnumProvisioning     RuntimeStateEnum = "PROVISIONING"
	RuntimeStateEnumActive           RuntimeStateEnum = "ACTIVE"
	RuntimeStateEnumStopping         RuntimeStateEnum = "STOPPING"
	RuntimeStateEnumStopped          RuntimeStateEnum = "STOPPED"
	RuntimeStateEnumDeleting         RuntimeStateEnum = "DELETING"
	RuntimeStateEnumUpgrading        RuntimeStateEnum = "UPGRADING"
	RuntimeStateEnumInitializing     RuntimeStateEnum = "INITIALIZING"
)

type Runtime struct {
	AccessConfig   *RuntimeAccessConfig    `json:"accessConfig"`
	CreateTime     *string                 `json:"createTime"`
	HealthState    *RuntimeHealthStateEnum `json:"healthState"`
	Metrics        *RuntimeMetrics         `json:"metrics"`
	Name           *string                 `json:"name"`
	SoftwareConfig *RuntimeSoftwareConfig  `json:"softwareConfig"`
	State          *RuntimeStateEnum       `json:"state"`
	UpdateTime     *string                 `json:"updateTime"`
	VirtualMachine *VirtualMachine         `json:"virtualMachine"`
}
