package shared




type GetInstanceHealthResponseHealthStateEnum string

const (
    GetInstanceHealthResponseHealthStateEnumHealthStateUnspecified GetInstanceHealthResponseHealthStateEnum = "HEALTH_STATE_UNSPECIFIED"
GetInstanceHealthResponseHealthStateEnumHealthy GetInstanceHealthResponseHealthStateEnum = "HEALTHY"
GetInstanceHealthResponseHealthStateEnumUnhealthy GetInstanceHealthResponseHealthStateEnum = "UNHEALTHY"
GetInstanceHealthResponseHealthStateEnumAgentNotInstalled GetInstanceHealthResponseHealthStateEnum = "AGENT_NOT_INSTALLED"
GetInstanceHealthResponseHealthStateEnumAgentNotRunning GetInstanceHealthResponseHealthStateEnum = "AGENT_NOT_RUNNING"
)


type GetInstanceHealthResponse struct {
    HealthInfo map[string]string `json:"healthInfo,omitempty"`
    HealthState *GetInstanceHealthResponseHealthStateEnum `json:"healthState,omitempty"`
    
}

