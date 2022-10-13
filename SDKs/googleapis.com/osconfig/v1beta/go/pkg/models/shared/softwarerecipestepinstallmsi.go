package shared

type SoftwareRecipeStepInstallMsi struct {
	AllowedExitCodes []int32  `json:"allowedExitCodes"`
	ArtifactID       *string  `json:"artifactId"`
	Flags            []string `json:"flags"`
}
