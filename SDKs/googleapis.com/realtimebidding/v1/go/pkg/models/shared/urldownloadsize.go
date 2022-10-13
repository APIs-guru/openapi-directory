package shared

type URLDownloadSize struct {
	DownloadSizeKb *int32  `json:"downloadSizeKb"`
	NormalizedURL  *string `json:"normalizedUrl"`
}
