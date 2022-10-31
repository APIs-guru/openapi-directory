package shared

type ListVolumeRestoresResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	VolumeRestores []VolumeRestore `json:"volumeRestores,omitempty"`
}
