package shared

type GoogleFirebaseFcmDataV1beta1MessageOutcomePercents struct {
	Delivered                     *float32 `json:"delivered"`
	DroppedAppForceStopped        *float32 `json:"droppedAppForceStopped"`
	DroppedDeviceInactive         *float32 `json:"droppedDeviceInactive"`
	DroppedTooManyPendingMessages *float32 `json:"droppedTooManyPendingMessages"`
	Pending                       *float32 `json:"pending"`
}
