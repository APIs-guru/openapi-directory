package shared

// SasPortalDeviceModel
// Information about the model of the device.
type SasPortalDeviceModel struct {
	FirmwareVersion *string `json:"firmwareVersion,omitempty"`
	HardwareVersion *string `json:"hardwareVersion,omitempty"`
	Name            *string `json:"name,omitempty"`
	SoftwareVersion *string `json:"softwareVersion,omitempty"`
	Vendor          *string `json:"vendor,omitempty"`
}
