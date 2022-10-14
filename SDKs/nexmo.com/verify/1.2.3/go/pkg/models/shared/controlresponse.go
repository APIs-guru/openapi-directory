package shared

type ControlResponseCommandEnum string

const (
	ControlResponseCommandEnumCancel           ControlResponseCommandEnum = "cancel"
	ControlResponseCommandEnumTriggerNextEvent ControlResponseCommandEnum = "trigger_next_event"
)

type ControlResponse struct {
	Command *ControlResponseCommandEnum `json:"command,omitempty"`
	Status  *string                     `json:"status,omitempty"`
}
