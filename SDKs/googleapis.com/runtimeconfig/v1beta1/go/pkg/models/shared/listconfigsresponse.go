package shared

type ListConfigsResponse struct {
	Configs       []RuntimeConfig `json:"configs,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}
