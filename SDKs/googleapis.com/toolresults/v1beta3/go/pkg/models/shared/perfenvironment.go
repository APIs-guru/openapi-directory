package shared

// PerfEnvironment
// Encapsulates performance environment info
type PerfEnvironment struct {
	CPUInfo    *CPUInfo    `json:"cpuInfo,omitempty"`
	MemoryInfo *MemoryInfo `json:"memoryInfo,omitempty"`
}
