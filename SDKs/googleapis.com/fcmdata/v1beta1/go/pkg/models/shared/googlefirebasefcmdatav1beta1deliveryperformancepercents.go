package shared

type GoogleFirebaseFcmDataV1beta1DeliveryPerformancePercents struct {
	DelayedDeviceDoze       *float32 `json:"delayedDeviceDoze"`
	DelayedDeviceOffline    *float32 `json:"delayedDeviceOffline"`
	DelayedMessageThrottled *float32 `json:"delayedMessageThrottled"`
	DelayedUserStopped      *float32 `json:"delayedUserStopped"`
	DeliveredNoDelay        *float32 `json:"deliveredNoDelay"`
}
