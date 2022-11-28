package shared

// DownloadParameters
// # gdata.* are outside protos with mising documentation
type DownloadParameters struct {
	AllowGzipCompression *bool `json:"allowGzipCompression,omitempty"`
	IgnoreRange          *bool `json:"ignoreRange,omitempty"`
}
