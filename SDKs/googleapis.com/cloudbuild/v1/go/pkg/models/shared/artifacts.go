package shared



type Artifacts struct {
    Images []string `json:"images,omitempty"`
    MavenArtifacts []MavenArtifact `json:"mavenArtifacts,omitempty"`
    Objects *ArtifactObjects `json:"objects,omitempty"`
    PythonPackages []PythonPackage `json:"pythonPackages,omitempty"`
    
}

