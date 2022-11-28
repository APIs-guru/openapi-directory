package shared

// GoogleChromeManagementV1Device
// Describes a device reporting Chrome browser information.
type GoogleChromeManagementV1Device struct {
	DeviceID *string `json:"deviceId,omitempty"`
	Machine  *string `json:"machine,omitempty"`
}
