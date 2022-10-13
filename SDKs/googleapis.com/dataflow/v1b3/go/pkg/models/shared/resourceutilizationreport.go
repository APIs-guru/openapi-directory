package shared

type ResourceUtilizationReport struct {
	Containers map[string]ResourceUtilizationReport `json:"containers"`
	CPUTime    []CPUTime                            `json:"cpuTime"`
	MemoryInfo []MemInfo                            `json:"memoryInfo"`
}
