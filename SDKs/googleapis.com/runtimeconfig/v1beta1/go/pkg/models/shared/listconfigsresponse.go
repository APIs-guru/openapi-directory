package shared

type ListConfigsResponse struct {
	Configs       []RuntimeConfig `json:"configs"`
	NextPageToken *string         `json:"nextPageToken"`
}
