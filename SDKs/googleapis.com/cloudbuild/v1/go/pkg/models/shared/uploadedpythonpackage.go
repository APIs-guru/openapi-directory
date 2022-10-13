package shared

type UploadedPythonPackage struct {
	FileHashes *FileHashes `json:"fileHashes"`
	PushTiming *TimeSpan   `json:"pushTiming"`
	URI        *string     `json:"uri"`
}
