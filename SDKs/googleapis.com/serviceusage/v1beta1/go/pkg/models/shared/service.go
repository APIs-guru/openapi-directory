package shared

type ServiceStateEnum string

const (
	ServiceStateEnumStateUnspecified ServiceStateEnum = "STATE_UNSPECIFIED"
	ServiceStateEnumDisabled         ServiceStateEnum = "DISABLED"
	ServiceStateEnumEnabled          ServiceStateEnum = "ENABLED"
)

// Service
// A service that is available for use by the consumer.
type Service struct {
	Config *ServiceConfig    `json:"config,omitempty"`
	Name   *string           `json:"name,omitempty"`
	Parent *string           `json:"parent,omitempty"`
	State  *ServiceStateEnum `json:"state,omitempty"`
}
