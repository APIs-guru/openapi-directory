package shared

type ControlRequestCmdEnum string

const (
	ControlRequestCmdEnumCancel           ControlRequestCmdEnum = "cancel"
	ControlRequestCmdEnumTriggerNextEvent ControlRequestCmdEnum = "trigger_next_event"
)

type ControlRequest struct {
	APIKey    string                `form:"name=api_key"`
	APISecret string                `form:"name=api_secret"`
	Cmd       ControlRequestCmdEnum `form:"name=cmd"`
	RequestID string                `form:"name=request_id"`
}
