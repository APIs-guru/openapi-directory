package shared

type GdataDownloadParameters struct {
	AllowGzipCompression *bool `json:"allowGzipCompression"`
	IgnoreRange          *bool `json:"ignoreRange"`
}
