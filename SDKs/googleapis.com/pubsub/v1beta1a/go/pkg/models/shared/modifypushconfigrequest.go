package shared

// ModifyPushConfigRequest
// Request for the ModifyPushConfig method.
type ModifyPushConfigRequest struct {
	PushConfig   *PushConfig `json:"pushConfig,omitempty"`
	Subscription *string     `json:"subscription,omitempty"`
}
