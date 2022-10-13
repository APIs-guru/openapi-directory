package shared

type MavenArtifact struct {
	ArtifactID *string `json:"artifactId"`
	GroupID    *string `json:"groupId"`
	Path       *string `json:"path"`
	Repository *string `json:"repository"`
	Version    *string `json:"version"`
}
