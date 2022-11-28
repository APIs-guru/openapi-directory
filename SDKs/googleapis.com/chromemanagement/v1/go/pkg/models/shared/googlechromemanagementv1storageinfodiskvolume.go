package shared

// GoogleChromeManagementV1StorageInfoDiskVolume
// Information for disk volumes
type GoogleChromeManagementV1StorageInfoDiskVolume struct {
	StorageFreeBytes  *string `json:"storageFreeBytes,omitempty"`
	StorageTotalBytes *string `json:"storageTotalBytes,omitempty"`
	VolumeID          *string `json:"volumeId,omitempty"`
}
