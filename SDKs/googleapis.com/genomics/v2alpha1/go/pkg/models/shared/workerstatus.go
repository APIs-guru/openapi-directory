package shared

type WorkerStatus struct {
	AttachedDisks map[string]DiskStatus `json:"attachedDisks"`
	BootDisk      *DiskStatus           `json:"bootDisk"`
	FreeRAMBytes  *string               `json:"freeRamBytes"`
	TotalRAMBytes *string               `json:"totalRamBytes"`
	UptimeSeconds *string               `json:"uptimeSeconds"`
}
