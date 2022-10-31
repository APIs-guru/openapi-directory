package shared



type ResourceUtilizationReport struct {
    Containers map[string]ResourceUtilizationReport `json:"containers,omitempty"`
    CPUTime []CPUTime `json:"cpuTime,omitempty"`
    MemoryInfo []MemInfo `json:"memoryInfo,omitempty"`
    
}

