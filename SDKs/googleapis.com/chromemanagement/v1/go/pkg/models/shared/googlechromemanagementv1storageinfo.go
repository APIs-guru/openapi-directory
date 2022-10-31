package shared

type GoogleChromeManagementV1StorageInfo struct {
	AvailableDiskBytes *string                                         `json:"availableDiskBytes,omitempty"`
	TotalDiskBytes     *string                                         `json:"totalDiskBytes,omitempty"`
	Volume             []GoogleChromeManagementV1StorageInfoDiskVolume `json:"volume,omitempty"`
}
