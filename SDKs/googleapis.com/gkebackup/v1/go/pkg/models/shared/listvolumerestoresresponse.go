package shared

type ListVolumeRestoresResponse struct {
	NextPageToken  *string         `json:"nextPageToken"`
	VolumeRestores []VolumeRestore `json:"volumeRestores"`
}
