package shared

// ListConfigsResponse
// `ListConfigs()` returns the following response. The order of returned objects is arbitrary; that is, it is not ordered in any particular way.
type ListConfigsResponse struct {
	Configs       []RuntimeConfig `json:"configs,omitempty"`
	NextPageToken *string         `json:"nextPageToken,omitempty"`
}
