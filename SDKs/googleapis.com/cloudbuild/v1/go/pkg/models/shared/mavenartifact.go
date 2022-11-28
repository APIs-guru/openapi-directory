package shared

// MavenArtifact
// A Maven artifact to upload to Artifact Registry upon successful completion of all build steps.
type MavenArtifact struct {
	ArtifactID *string `json:"artifactId,omitempty"`
	GroupID    *string `json:"groupId,omitempty"`
	Path       *string `json:"path,omitempty"`
	Repository *string `json:"repository,omitempty"`
	Version    *string `json:"version,omitempty"`
}
