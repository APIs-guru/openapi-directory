package shared

// Artifacts
// Artifacts produced by a build that should be uploaded upon successful completion of all build steps.
type Artifacts struct {
	Images         []string         `json:"images,omitempty"`
	MavenArtifacts []MavenArtifact  `json:"mavenArtifacts,omitempty"`
	Objects        *ArtifactObjects `json:"objects,omitempty"`
	PythonPackages []PythonPackage  `json:"pythonPackages,omitempty"`
}
