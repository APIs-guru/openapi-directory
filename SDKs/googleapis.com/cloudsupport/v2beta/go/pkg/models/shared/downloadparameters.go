package shared



type DownloadParameters struct {
    AllowGzipCompression *bool `json:"allowGzipCompression,omitempty"`
    IgnoreRange *bool `json:"ignoreRange,omitempty"`
    
}

