package shared



type UploadedPythonPackage struct {
    FileHashes *FileHashes `json:"fileHashes,omitempty"`
    PushTiming *TimeSpan `json:"pushTiming,omitempty"`
    URI *string `json:"uri,omitempty"`
    
}

