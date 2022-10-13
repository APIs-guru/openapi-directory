package shared

type ServiceStateEnum string

const (
	ServiceStateEnumStateUnspecified ServiceStateEnum = "STATE_UNSPECIFIED"
	ServiceStateEnumDisabled         ServiceStateEnum = "DISABLED"
	ServiceStateEnumEnabled          ServiceStateEnum = "ENABLED"
)

type Service struct {
	Config *ServiceConfig    `json:"config"`
	Name   *string           `json:"name"`
	Parent *string           `json:"parent"`
	State  *ServiceStateEnum `json:"state"`
}
