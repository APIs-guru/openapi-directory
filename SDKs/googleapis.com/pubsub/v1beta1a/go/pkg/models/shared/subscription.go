package shared



type Subscription struct {
    AckDeadlineSeconds *int32 `json:"ackDeadlineSeconds,omitempty"`
    Name *string `json:"name,omitempty"`
    PushConfig *PushConfig `json:"pushConfig,omitempty"`
    Topic *string `json:"topic,omitempty"`
    
}

