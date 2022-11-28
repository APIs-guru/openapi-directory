package shared

// GoogleFirebaseFcmDataV1beta1MessageOutcomePercents
// Percentage breakdown of message delivery outcomes. These categories are mutually exclusive. All percentages are calculated with countMessagesAccepted as the denominator. These categories may not account for all message outcomes.
type GoogleFirebaseFcmDataV1beta1MessageOutcomePercents struct {
	Delivered                     *float32 `json:"delivered,omitempty"`
	DroppedAppForceStopped        *float32 `json:"droppedAppForceStopped,omitempty"`
	DroppedDeviceInactive         *float32 `json:"droppedDeviceInactive,omitempty"`
	DroppedTooManyPendingMessages *float32 `json:"droppedTooManyPendingMessages,omitempty"`
	Pending                       *float32 `json:"pending,omitempty"`
}
