package shared

// GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse
// Response containing a list of devices with a specific type of hardware specification from the requested hardware type.
type GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse struct {
	CPUReports     []GoogleChromeManagementV1DeviceHardwareCountReport `json:"cpuReports,omitempty"`
	MemoryReports  []GoogleChromeManagementV1DeviceHardwareCountReport `json:"memoryReports,omitempty"`
	ModelReports   []GoogleChromeManagementV1DeviceHardwareCountReport `json:"modelReports,omitempty"`
	StorageReports []GoogleChromeManagementV1DeviceHardwareCountReport `json:"storageReports,omitempty"`
}
