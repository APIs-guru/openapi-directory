package shared



type ModifyPushConfigRequest struct {
    PushConfig *PushConfig `json:"pushConfig,omitempty"`
    Subscription *string `json:"subscription,omitempty"`
    
}

