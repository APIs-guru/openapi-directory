package shared

type Results struct {
	ArtifactManifest *string                 `json:"artifactManifest"`
	ArtifactTiming   *TimeSpan               `json:"artifactTiming"`
	BuildStepImages  []string                `json:"buildStepImages"`
	BuildStepOutputs []string                `json:"buildStepOutputs"`
	Images           []BuiltImage            `json:"images"`
	MavenArtifacts   []UploadedMavenArtifact `json:"mavenArtifacts"`
	NumArtifacts     *string                 `json:"numArtifacts"`
	PythonPackages   []UploadedPythonPackage `json:"pythonPackages"`
}
