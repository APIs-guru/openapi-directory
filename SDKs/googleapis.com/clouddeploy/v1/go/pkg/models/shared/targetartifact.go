package shared

// TargetArtifact
// The artifacts produced by a target render operation.
type TargetArtifact struct {
	ArtifactURI        *string `json:"artifactUri,omitempty"`
	ManifestPath       *string `json:"manifestPath,omitempty"`
	SkaffoldConfigPath *string `json:"skaffoldConfigPath,omitempty"`
}
