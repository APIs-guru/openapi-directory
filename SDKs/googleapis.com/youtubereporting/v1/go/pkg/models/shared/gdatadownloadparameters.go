package shared



type GdataDownloadParameters struct {
    AllowGzipCompression *bool `json:"allowGzipCompression,omitempty"`
    IgnoreRange *bool `json:"ignoreRange,omitempty"`
    
}

