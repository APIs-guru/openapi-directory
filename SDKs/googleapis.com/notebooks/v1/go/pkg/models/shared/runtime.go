package shared




type RuntimeHealthStateEnum string

const (
    RuntimeHealthStateEnumHealthStateUnspecified RuntimeHealthStateEnum = "HEALTH_STATE_UNSPECIFIED"
RuntimeHealthStateEnumHealthy RuntimeHealthStateEnum = "HEALTHY"
RuntimeHealthStateEnumUnhealthy RuntimeHealthStateEnum = "UNHEALTHY"
RuntimeHealthStateEnumAgentNotInstalled RuntimeHealthStateEnum = "AGENT_NOT_INSTALLED"
RuntimeHealthStateEnumAgentNotRunning RuntimeHealthStateEnum = "AGENT_NOT_RUNNING"
)



type RuntimeStateEnum string

const (
    RuntimeStateEnumStateUnspecified RuntimeStateEnum = "STATE_UNSPECIFIED"
RuntimeStateEnumStarting RuntimeStateEnum = "STARTING"
RuntimeStateEnumProvisioning RuntimeStateEnum = "PROVISIONING"
RuntimeStateEnumActive RuntimeStateEnum = "ACTIVE"
RuntimeStateEnumStopping RuntimeStateEnum = "STOPPING"
RuntimeStateEnumStopped RuntimeStateEnum = "STOPPED"
RuntimeStateEnumDeleting RuntimeStateEnum = "DELETING"
RuntimeStateEnumUpgrading RuntimeStateEnum = "UPGRADING"
RuntimeStateEnumInitializing RuntimeStateEnum = "INITIALIZING"
)


type Runtime struct {
    AccessConfig *RuntimeAccessConfig `json:"accessConfig,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    HealthState *RuntimeHealthStateEnum `json:"healthState,omitempty"`
    Metrics *RuntimeMetrics `json:"metrics,omitempty"`
    Name *string `json:"name,omitempty"`
    SoftwareConfig *RuntimeSoftwareConfig `json:"softwareConfig,omitempty"`
    State *RuntimeStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    VirtualMachine *VirtualMachine `json:"virtualMachine,omitempty"`
    
}

