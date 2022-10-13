package shared

type SoftwareRecipeStepExecFile struct {
	AllowedExitCodes []int32  `json:"allowedExitCodes"`
	Args             []string `json:"args"`
	ArtifactID       *string  `json:"artifactId"`
	LocalPath        *string  `json:"localPath"`
}
