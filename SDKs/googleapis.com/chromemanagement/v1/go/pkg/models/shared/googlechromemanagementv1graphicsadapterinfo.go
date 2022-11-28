package shared

// GoogleChromeManagementV1GraphicsAdapterInfo
// Information of a graphics adapter (GPU).
type GoogleChromeManagementV1GraphicsAdapterInfo struct {
	Adapter       *string `json:"adapter,omitempty"`
	DeviceID      *string `json:"deviceId,omitempty"`
	DriverVersion *string `json:"driverVersion,omitempty"`
}
