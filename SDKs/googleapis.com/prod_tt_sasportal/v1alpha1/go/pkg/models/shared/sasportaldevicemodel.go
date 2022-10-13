package shared

type SasPortalDeviceModel struct {
	FirmwareVersion *string `json:"firmwareVersion"`
	HardwareVersion *string `json:"hardwareVersion"`
	Name            *string `json:"name"`
	SoftwareVersion *string `json:"softwareVersion"`
	Vendor          *string `json:"vendor"`
}
