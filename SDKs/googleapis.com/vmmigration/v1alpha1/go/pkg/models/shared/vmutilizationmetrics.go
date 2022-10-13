package shared

type VMUtilizationMetrics struct {
	CPUAverage                   *int32  `json:"cpuAverage"`
	CPUAveragePercent            *int32  `json:"cpuAveragePercent"`
	CPUMax                       *int32  `json:"cpuMax"`
	CPUMaxPercent                *int32  `json:"cpuMaxPercent"`
	DiskIoRateAverage            *string `json:"diskIoRateAverage"`
	DiskIoRateAverageKbps        *string `json:"diskIoRateAverageKbps"`
	DiskIoRateMax                *string `json:"diskIoRateMax"`
	DiskIoRateMaxKbps            *string `json:"diskIoRateMaxKbps"`
	MemoryAverage                *int32  `json:"memoryAverage"`
	MemoryAveragePercent         *int32  `json:"memoryAveragePercent"`
	MemoryMax                    *int32  `json:"memoryMax"`
	MemoryMaxPercent             *int32  `json:"memoryMaxPercent"`
	NetworkThroughputAverage     *string `json:"networkThroughputAverage"`
	NetworkThroughputAverageKbps *string `json:"networkThroughputAverageKbps"`
	NetworkThroughputMax         *string `json:"networkThroughputMax"`
	NetworkThroughputMaxKbps     *string `json:"networkThroughputMaxKbps"`
}
