package shared

// GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents
// Overview of delivery performance for messages that were successfully delivered. All percentages are calculated with countMessagesAccepted as the denominator. These categories are not mutually exclusive; a message can be delayed for multiple reasons.
type GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents struct {
	DelayedDeviceDoze       *float32 `json:"delayedDeviceDoze,omitempty"`
	DelayedDeviceOffline    *float32 `json:"delayedDeviceOffline,omitempty"`
	DelayedMessageThrottled *float32 `json:"delayedMessageThrottled,omitempty"`
	DelayedUserStopped      *float32 `json:"delayedUserStopped,omitempty"`
	DeliveredNoDelay        *float32 `json:"deliveredNoDelay,omitempty"`
}
