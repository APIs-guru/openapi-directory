package shared

type PerfEnvironment struct {
	CPUInfo    *CPUInfo    `json:"cpuInfo,omitempty"`
	MemoryInfo *MemoryInfo `json:"memoryInfo,omitempty"`
}
