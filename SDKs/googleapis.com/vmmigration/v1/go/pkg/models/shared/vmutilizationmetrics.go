package shared

type VMUtilizationMetrics struct {
	CPUAveragePercent            *int32  `json:"cpuAveragePercent,omitempty"`
	CPUMaxPercent                *int32  `json:"cpuMaxPercent,omitempty"`
	DiskIoRateAverageKbps        *string `json:"diskIoRateAverageKbps,omitempty"`
	DiskIoRateMaxKbps            *string `json:"diskIoRateMaxKbps,omitempty"`
	MemoryAveragePercent         *int32  `json:"memoryAveragePercent,omitempty"`
	MemoryMaxPercent             *int32  `json:"memoryMaxPercent,omitempty"`
	NetworkThroughputAverageKbps *string `json:"networkThroughputAverageKbps,omitempty"`
	NetworkThroughputMaxKbps     *string `json:"networkThroughputMaxKbps,omitempty"`
}
