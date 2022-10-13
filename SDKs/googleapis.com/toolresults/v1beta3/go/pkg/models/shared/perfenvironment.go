package shared

type PerfEnvironment struct {
	CPUInfo    *CPUInfo    `json:"cpuInfo"`
	MemoryInfo *MemoryInfo `json:"memoryInfo"`
}
