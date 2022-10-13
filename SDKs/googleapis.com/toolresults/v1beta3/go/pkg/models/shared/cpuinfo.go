package shared

type CPUInfo struct {
	CPUProcessor  *string  `json:"cpuProcessor"`
	CPUSpeedInGhz *float32 `json:"cpuSpeedInGhz"`
	NumberOfCores *int32   `json:"numberOfCores"`
}
