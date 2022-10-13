package shared

type DownloadParameters struct {
	AllowGzipCompression *bool `json:"allowGzipCompression"`
	IgnoreRange          *bool `json:"ignoreRange"`
}
