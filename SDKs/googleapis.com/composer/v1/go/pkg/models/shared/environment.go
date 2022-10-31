package shared




type EnvironmentStateEnum string

const (
    EnvironmentStateEnumStateUnspecified EnvironmentStateEnum = "STATE_UNSPECIFIED"
EnvironmentStateEnumCreating EnvironmentStateEnum = "CREATING"
EnvironmentStateEnumRunning EnvironmentStateEnum = "RUNNING"
EnvironmentStateEnumUpdating EnvironmentStateEnum = "UPDATING"
EnvironmentStateEnumDeleting EnvironmentStateEnum = "DELETING"
EnvironmentStateEnumError EnvironmentStateEnum = "ERROR"
)


type Environment struct {
    Config *EnvironmentConfig `json:"config,omitempty"`
    CreateTime *string `json:"createTime,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    State *EnvironmentStateEnum `json:"state,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    UUID *string `json:"uuid,omitempty"`
    
}

