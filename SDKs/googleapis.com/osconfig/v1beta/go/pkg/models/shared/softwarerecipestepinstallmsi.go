package shared



type SoftwareRecipeStepInstallMsi struct {
    AllowedExitCodes []int32 `json:"allowedExitCodes,omitempty"`
    ArtifactID *string `json:"artifactId,omitempty"`
    Flags []string `json:"flags,omitempty"`
    
}

