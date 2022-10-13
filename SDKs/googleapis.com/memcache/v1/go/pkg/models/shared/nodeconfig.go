package shared

type NodeConfig struct {
	CPUCount     *int32 `json:"cpuCount"`
	MemorySizeMb *int32 `json:"memorySizeMb"`
}
