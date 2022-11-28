package shared

// VMUtilizationMetrics
// Utilization metrics values for a single VM.
type VMUtilizationMetrics struct {
	CPUAverage                   *int32  `json:"cpuAverage,omitempty"`
	CPUAveragePercent            *int32  `json:"cpuAveragePercent,omitempty"`
	CPUMax                       *int32  `json:"cpuMax,omitempty"`
	CPUMaxPercent                *int32  `json:"cpuMaxPercent,omitempty"`
	DiskIoRateAverage            *string `json:"diskIoRateAverage,omitempty"`
	DiskIoRateAverageKbps        *string `json:"diskIoRateAverageKbps,omitempty"`
	DiskIoRateMax                *string `json:"diskIoRateMax,omitempty"`
	DiskIoRateMaxKbps            *string `json:"diskIoRateMaxKbps,omitempty"`
	MemoryAverage                *int32  `json:"memoryAverage,omitempty"`
	MemoryAveragePercent         *int32  `json:"memoryAveragePercent,omitempty"`
	MemoryMax                    *int32  `json:"memoryMax,omitempty"`
	MemoryMaxPercent             *int32  `json:"memoryMaxPercent,omitempty"`
	NetworkThroughputAverage     *string `json:"networkThroughputAverage,omitempty"`
	NetworkThroughputAverageKbps *string `json:"networkThroughputAverageKbps,omitempty"`
	NetworkThroughputMax         *string `json:"networkThroughputMax,omitempty"`
	NetworkThroughputMaxKbps     *string `json:"networkThroughputMaxKbps,omitempty"`
}
