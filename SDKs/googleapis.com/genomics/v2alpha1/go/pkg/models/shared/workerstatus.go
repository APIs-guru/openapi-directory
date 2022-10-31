package shared

type WorkerStatus struct {
	AttachedDisks map[string]DiskStatus `json:"attachedDisks,omitempty"`
	BootDisk      *DiskStatus           `json:"bootDisk,omitempty"`
	FreeRAMBytes  *string               `json:"freeRamBytes,omitempty"`
	TotalRAMBytes *string               `json:"totalRamBytes,omitempty"`
	UptimeSeconds *string               `json:"uptimeSeconds,omitempty"`
}
