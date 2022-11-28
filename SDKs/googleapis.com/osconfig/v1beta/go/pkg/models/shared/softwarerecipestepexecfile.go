package shared

// SoftwareRecipeStepExecFile
// Executes an artifact or local file.
type SoftwareRecipeStepExecFile struct {
	AllowedExitCodes []int32  `json:"allowedExitCodes,omitempty"`
	Args             []string `json:"args,omitempty"`
	ArtifactID       *string  `json:"artifactId,omitempty"`
	LocalPath        *string  `json:"localPath,omitempty"`
}
