package shared

// URLDownloadSize
// The URL-level breakdown for the download size.
type URLDownloadSize struct {
	DownloadSizeKb *int32  `json:"downloadSizeKb,omitempty"`
	NormalizedURL  *string `json:"normalizedUrl,omitempty"`
}
