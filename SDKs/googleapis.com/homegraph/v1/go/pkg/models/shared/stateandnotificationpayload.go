package shared

// StateAndNotificationPayload
// Payload containing the state and notification information for devices.
type StateAndNotificationPayload struct {
	Devices *ReportStateAndNotificationDevice `json:"devices,omitempty"`
}
