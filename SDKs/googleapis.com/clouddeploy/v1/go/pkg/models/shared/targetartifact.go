package shared



type TargetArtifact struct {
    ArtifactURI *string `json:"artifactUri,omitempty"`
    ManifestPath *string `json:"manifestPath,omitempty"`
    SkaffoldConfigPath *string `json:"skaffoldConfigPath,omitempty"`
    
}

