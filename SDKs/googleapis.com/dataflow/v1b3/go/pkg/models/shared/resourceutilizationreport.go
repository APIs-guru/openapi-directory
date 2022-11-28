package shared

// ResourceUtilizationReport
// Worker metrics exported from workers. This contains resource utilization metrics accumulated from a variety of sources. For more information, see go/df-resource-signals.
type ResourceUtilizationReport struct {
	Containers map[string]ResourceUtilizationReport `json:"containers,omitempty"`
	CPUTime    []CPUTime                            `json:"cpuTime,omitempty"`
	MemoryInfo []MemInfo                            `json:"memoryInfo,omitempty"`
}
