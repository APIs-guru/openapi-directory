package shared



type NodeConfig struct {
    CPUCount *int32 `json:"cpuCount,omitempty"`
    MemorySizeMb *int32 `json:"memorySizeMb,omitempty"`
    
}

