package shared

type GoogleChromeManagementV1TelemetryDevice struct {
	AudioStatusReport        []GoogleChromeManagementV1AudioStatusReport        `json:"audioStatusReport"`
	BatteryInfo              []GoogleChromeManagementV1BatteryInfo              `json:"batteryInfo"`
	BatteryStatusReport      []GoogleChromeManagementV1BatteryStatusReport      `json:"batteryStatusReport"`
	BootPerformanceReport    []GoogleChromeManagementV1BootPerformanceReport    `json:"bootPerformanceReport"`
	CPUInfo                  []GoogleChromeManagementV1CPUInfo                  `json:"cpuInfo"`
	CPUStatusReport          []GoogleChromeManagementV1CPUStatusReport          `json:"cpuStatusReport"`
	Customer                 *string                                            `json:"customer"`
	DeviceID                 *string                                            `json:"deviceId"`
	GraphicsInfo             *GoogleChromeManagementV1GraphicsInfo              `json:"graphicsInfo"`
	GraphicsStatusReport     []GoogleChromeManagementV1GraphicsStatusReport     `json:"graphicsStatusReport"`
	MemoryInfo               *GoogleChromeManagementV1MemoryInfo                `json:"memoryInfo"`
	MemoryStatusReport       []GoogleChromeManagementV1MemoryStatusReport       `json:"memoryStatusReport"`
	Name                     *string                                            `json:"name"`
	NetworkDiagnosticsReport []GoogleChromeManagementV1NetworkDiagnosticsReport `json:"networkDiagnosticsReport"`
	NetworkInfo              *GoogleChromeManagementV1NetworkInfo               `json:"networkInfo"`
	NetworkStatusReport      []GoogleChromeManagementV1NetworkStatusReport      `json:"networkStatusReport"`
	OrgUnitID                *string                                            `json:"orgUnitId"`
	OsUpdateStatus           []GoogleChromeManagementV1OsUpdateStatus           `json:"osUpdateStatus"`
	SerialNumber             *string                                            `json:"serialNumber"`
	StorageInfo              *GoogleChromeManagementV1StorageInfo               `json:"storageInfo"`
	StorageStatusReport      []GoogleChromeManagementV1StorageStatusReport      `json:"storageStatusReport"`
	ThunderboltInfo          []GoogleChromeManagementV1ThunderboltInfo          `json:"thunderboltInfo"`
}
