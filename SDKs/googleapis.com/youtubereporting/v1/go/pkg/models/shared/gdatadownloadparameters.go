package shared

// GdataDownloadParameters
// gdata
type GdataDownloadParameters struct {
	AllowGzipCompression *bool `json:"allowGzipCompression,omitempty"`
	IgnoreRange          *bool `json:"ignoreRange,omitempty"`
}
