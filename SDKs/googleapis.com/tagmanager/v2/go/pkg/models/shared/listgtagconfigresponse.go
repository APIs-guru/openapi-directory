package shared

type ListGtagConfigResponse struct {
	GtagConfig    []GtagConfig `json:"gtagConfig,omitempty"`
	NextPageToken *string      `json:"nextPageToken,omitempty"`
}
