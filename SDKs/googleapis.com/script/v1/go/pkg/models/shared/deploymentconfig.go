package shared



type DeploymentConfig struct {
    Description *string `json:"description,omitempty"`
    ManifestFileName *string `json:"manifestFileName,omitempty"`
    ScriptID *string `json:"scriptId,omitempty"`
    VersionNumber *int32 `json:"versionNumber,omitempty"`
    
}

