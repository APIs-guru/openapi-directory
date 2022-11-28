package shared

// ListVolumeRestoresResponse
// Response message for ListVolumeRestores.
type ListVolumeRestoresResponse struct {
	NextPageToken  *string         `json:"nextPageToken,omitempty"`
	VolumeRestores []VolumeRestore `json:"volumeRestores,omitempty"`
}
