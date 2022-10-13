package shared

type TargetArtifact struct {
	ArtifactURI        *string `json:"artifactUri"`
	ManifestPath       *string `json:"manifestPath"`
	SkaffoldConfigPath *string `json:"skaffoldConfigPath"`
}
