package shared

type EnvironmentStateEnum string

const (
	EnvironmentStateEnumStateUnspecified EnvironmentStateEnum = "STATE_UNSPECIFIED"
	EnvironmentStateEnumCreating         EnvironmentStateEnum = "CREATING"
	EnvironmentStateEnumRunning          EnvironmentStateEnum = "RUNNING"
	EnvironmentStateEnumUpdating         EnvironmentStateEnum = "UPDATING"
	EnvironmentStateEnumDeleting         EnvironmentStateEnum = "DELETING"
	EnvironmentStateEnumError            EnvironmentStateEnum = "ERROR"
)

type Environment struct {
	Config     *EnvironmentConfig    `json:"config"`
	CreateTime *string               `json:"createTime"`
	Labels     map[string]string     `json:"labels"`
	Name       *string               `json:"name"`
	State      *EnvironmentStateEnum `json:"state"`
	UpdateTime *string               `json:"updateTime"`
	UUID       *string               `json:"uuid"`
}
