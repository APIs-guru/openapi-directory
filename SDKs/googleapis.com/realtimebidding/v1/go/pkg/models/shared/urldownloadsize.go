package shared

type URLDownloadSize struct {
	DownloadSizeKb *int32  `json:"downloadSizeKb,omitempty"`
	NormalizedURL  *string `json:"normalizedUrl,omitempty"`
}
