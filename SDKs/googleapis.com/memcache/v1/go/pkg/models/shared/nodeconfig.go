package shared

// NodeConfig
// Configuration for a Memcached Node.
type NodeConfig struct {
	CPUCount     *int32 `json:"cpuCount,omitempty"`
	MemorySizeMb *int32 `json:"memorySizeMb,omitempty"`
}
