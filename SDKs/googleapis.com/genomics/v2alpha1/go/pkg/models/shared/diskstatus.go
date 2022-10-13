package shared

type DiskStatus struct {
	FreeSpaceBytes  *string `json:"freeSpaceBytes"`
	TotalSpaceBytes *string `json:"totalSpaceBytes"`
}
