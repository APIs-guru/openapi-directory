package shared



type ListVolumeBackupsResponse struct {
    NextPageToken *string `json:"nextPageToken,omitempty"`
    VolumeBackups []VolumeBackup `json:"volumeBackups,omitempty"`
    
}

