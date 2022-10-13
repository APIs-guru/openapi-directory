package shared

type ModifyPushConfigRequest struct {
	PushConfig   *PushConfig `json:"pushConfig"`
	Subscription *string     `json:"subscription"`
}
