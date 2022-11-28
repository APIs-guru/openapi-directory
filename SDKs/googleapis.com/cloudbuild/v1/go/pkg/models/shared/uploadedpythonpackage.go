package shared

// UploadedPythonPackage
// Artifact uploaded using the PythonPackage directive.
type UploadedPythonPackage struct {
	FileHashes *FileHashes `json:"fileHashes,omitempty"`
	PushTiming *TimeSpan   `json:"pushTiming,omitempty"`
	URI        *string     `json:"uri,omitempty"`
}
