package shared

// ReportStateAndNotificationDevice
// The states and notifications specific to a device.
type ReportStateAndNotificationDevice struct {
	Notifications map[string]interface{} `json:"notifications,omitempty"`
	States        map[string]interface{} `json:"states,omitempty"`
}
