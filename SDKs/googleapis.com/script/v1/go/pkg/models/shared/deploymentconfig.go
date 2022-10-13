package shared

type DeploymentConfig struct {
	Description      *string `json:"description"`
	ManifestFileName *string `json:"manifestFileName"`
	ScriptID         *string `json:"scriptId"`
	VersionNumber    *int32  `json:"versionNumber"`
}
