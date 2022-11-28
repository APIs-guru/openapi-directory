package shared

// UploadedMavenArtifact
// A Maven artifact uploaded using the MavenArtifact directive.
type UploadedMavenArtifact struct {
	FileHashes *FileHashes `json:"fileHashes,omitempty"`
	PushTiming *TimeSpan   `json:"pushTiming,omitempty"`
	URI        *string     `json:"uri,omitempty"`
}
