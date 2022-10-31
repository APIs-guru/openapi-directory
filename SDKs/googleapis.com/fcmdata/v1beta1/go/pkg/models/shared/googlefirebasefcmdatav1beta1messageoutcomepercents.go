package shared



type GoogleFirebaseFcmDataV1beta1MessageOutcomePercents struct {
    Delivered *float32 `json:"delivered,omitempty"`
    DroppedAppForceStopped *float32 `json:"droppedAppForceStopped,omitempty"`
    DroppedDeviceInactive *float32 `json:"droppedDeviceInactive,omitempty"`
    DroppedTooManyPendingMessages *float32 `json:"droppedTooManyPendingMessages,omitempty"`
    Pending *float32 `json:"pending,omitempty"`
    
}

