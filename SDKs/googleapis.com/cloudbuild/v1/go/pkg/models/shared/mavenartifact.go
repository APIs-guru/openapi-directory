package shared



type MavenArtifact struct {
    ArtifactID *string `json:"artifactId,omitempty"`
    GroupID *string `json:"groupId,omitempty"`
    Path *string `json:"path,omitempty"`
    Repository *string `json:"repository,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

