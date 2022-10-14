package shared

type CPUInfo struct {
	CPUProcessor  *string  `json:"cpuProcessor,omitempty"`
	CPUSpeedInGhz *float32 `json:"cpuSpeedInGhz,omitempty"`
	NumberOfCores *int32   `json:"numberOfCores,omitempty"`
}
