package shared

type Artifacts struct {
	Images         []string         `json:"images"`
	MavenArtifacts []MavenArtifact  `json:"mavenArtifacts"`
	Objects        *ArtifactObjects `json:"objects"`
	PythonPackages []PythonPackage  `json:"pythonPackages"`
}
