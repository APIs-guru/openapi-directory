package shared

type Results struct {
	ArtifactManifest *string                 `json:"artifactManifest,omitempty"`
	ArtifactTiming   *TimeSpan               `json:"artifactTiming,omitempty"`
	BuildStepImages  []string                `json:"buildStepImages,omitempty"`
	BuildStepOutputs []string                `json:"buildStepOutputs,omitempty"`
	Images           []BuiltImage            `json:"images,omitempty"`
	MavenArtifacts   []UploadedMavenArtifact `json:"mavenArtifacts,omitempty"`
	NumArtifacts     *string                 `json:"numArtifacts,omitempty"`
	PythonPackages   []UploadedPythonPackage `json:"pythonPackages,omitempty"`
}
