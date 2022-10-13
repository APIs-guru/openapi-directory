package shared

type VMUtilizationMetrics struct {
	CPUAveragePercent            *int32  `json:"cpuAveragePercent"`
	CPUMaxPercent                *int32  `json:"cpuMaxPercent"`
	DiskIoRateAverageKbps        *string `json:"diskIoRateAverageKbps"`
	DiskIoRateMaxKbps            *string `json:"diskIoRateMaxKbps"`
	MemoryAveragePercent         *int32  `json:"memoryAveragePercent"`
	MemoryMaxPercent             *int32  `json:"memoryMaxPercent"`
	NetworkThroughputAverageKbps *string `json:"networkThroughputAverageKbps"`
	NetworkThroughputMaxKbps     *string `json:"networkThroughputMaxKbps"`
}
