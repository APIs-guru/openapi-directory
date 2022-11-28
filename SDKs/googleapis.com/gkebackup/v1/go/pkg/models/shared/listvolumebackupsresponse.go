package shared

// ListVolumeBackupsResponse
// Response message for ListVolumeBackups.
type ListVolumeBackupsResponse struct {
	NextPageToken *string        `json:"nextPageToken,omitempty"`
	VolumeBackups []VolumeBackup `json:"volumeBackups,omitempty"`
}
