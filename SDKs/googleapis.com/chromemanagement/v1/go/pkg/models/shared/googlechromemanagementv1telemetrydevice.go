package shared

// GoogleChromeManagementV1TelemetryDevice
// Telemetry data collected from a managed device.
type GoogleChromeManagementV1TelemetryDevice struct {
	AudioStatusReport        []GoogleChromeManagementV1AudioStatusReport        `json:"audioStatusReport,omitempty"`
	BatteryInfo              []GoogleChromeManagementV1BatteryInfo              `json:"batteryInfo,omitempty"`
	BatteryStatusReport      []GoogleChromeManagementV1BatteryStatusReport      `json:"batteryStatusReport,omitempty"`
	BootPerformanceReport    []GoogleChromeManagementV1BootPerformanceReport    `json:"bootPerformanceReport,omitempty"`
	CPUInfo                  []GoogleChromeManagementV1CPUInfo                  `json:"cpuInfo,omitempty"`
	CPUStatusReport          []GoogleChromeManagementV1CPUStatusReport          `json:"cpuStatusReport,omitempty"`
	Customer                 *string                                            `json:"customer,omitempty"`
	DeviceID                 *string                                            `json:"deviceId,omitempty"`
	GraphicsInfo             *GoogleChromeManagementV1GraphicsInfo              `json:"graphicsInfo,omitempty"`
	GraphicsStatusReport     []GoogleChromeManagementV1GraphicsStatusReport     `json:"graphicsStatusReport,omitempty"`
	MemoryInfo               *GoogleChromeManagementV1MemoryInfo                `json:"memoryInfo,omitempty"`
	MemoryStatusReport       []GoogleChromeManagementV1MemoryStatusReport       `json:"memoryStatusReport,omitempty"`
	Name                     *string                                            `json:"name,omitempty"`
	NetworkDiagnosticsReport []GoogleChromeManagementV1NetworkDiagnosticsReport `json:"networkDiagnosticsReport,omitempty"`
	NetworkInfo              *GoogleChromeManagementV1NetworkInfo               `json:"networkInfo,omitempty"`
	NetworkStatusReport      []GoogleChromeManagementV1NetworkStatusReport      `json:"networkStatusReport,omitempty"`
	OrgUnitID                *string                                            `json:"orgUnitId,omitempty"`
	OsUpdateStatus           []GoogleChromeManagementV1OsUpdateStatus           `json:"osUpdateStatus,omitempty"`
	SerialNumber             *string                                            `json:"serialNumber,omitempty"`
	StorageInfo              *GoogleChromeManagementV1StorageInfo               `json:"storageInfo,omitempty"`
	StorageStatusReport      []GoogleChromeManagementV1StorageStatusReport      `json:"storageStatusReport,omitempty"`
	ThunderboltInfo          []GoogleChromeManagementV1ThunderboltInfo          `json:"thunderboltInfo,omitempty"`
}
