package shared

type UploadedMavenArtifact struct {
	FileHashes *FileHashes `json:"fileHashes"`
	PushTiming *TimeSpan   `json:"pushTiming"`
	URI        *string     `json:"uri"`
}
