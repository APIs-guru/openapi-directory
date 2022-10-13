package shared

type GoogleChromeManagementV1StorageInfo struct {
	AvailableDiskBytes *string                                         `json:"availableDiskBytes"`
	TotalDiskBytes     *string                                         `json:"totalDiskBytes"`
	Volume             []GoogleChromeManagementV1StorageInfoDiskVolume `json:"volume"`
}
