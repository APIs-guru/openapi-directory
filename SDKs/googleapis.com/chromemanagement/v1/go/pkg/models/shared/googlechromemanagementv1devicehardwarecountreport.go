package shared

// GoogleChromeManagementV1DeviceHardwareCountReport
// Report for CountChromeDevicesPerHardwareSpecResponse, contains the count of devices with a unique hardware specification.
type GoogleChromeManagementV1DeviceHardwareCountReport struct {
	Bucket *string `json:"bucket,omitempty"`
	Count  *string `json:"count,omitempty"`
}
