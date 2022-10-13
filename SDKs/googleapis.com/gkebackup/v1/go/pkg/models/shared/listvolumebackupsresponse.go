package shared

type ListVolumeBackupsResponse struct {
	NextPageToken *string        `json:"nextPageToken"`
	VolumeBackups []VolumeBackup `json:"volumeBackups"`
}
