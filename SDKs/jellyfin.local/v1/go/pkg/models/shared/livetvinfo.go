package shared

type LiveTvInfo struct {
	EnabledUsers []string            `json:"EnabledUsers"`
	IsEnabled    *bool               `json:"IsEnabled"`
	Services     []LiveTvServiceInfo `json:"Services"`
}
