package shared

type GoogleChromeManagementV1CountChromeHardwareFleetDevicesResponse struct {
	CPUReports     []GoogleChromeManagementV1DeviceHardwareCountReport `json:"cpuReports"`
	MemoryReports  []GoogleChromeManagementV1DeviceHardwareCountReport `json:"memoryReports"`
	ModelReports   []GoogleChromeManagementV1DeviceHardwareCountReport `json:"modelReports"`
	StorageReports []GoogleChromeManagementV1DeviceHardwareCountReport `json:"storageReports"`
}
