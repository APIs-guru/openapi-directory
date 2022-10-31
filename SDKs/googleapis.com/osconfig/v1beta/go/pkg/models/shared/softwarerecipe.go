package shared




type SoftwareRecipeDesiredStateEnum string

const (
    SoftwareRecipeDesiredStateEnumDesiredStateUnspecified SoftwareRecipeDesiredStateEnum = "DESIRED_STATE_UNSPECIFIED"
SoftwareRecipeDesiredStateEnumInstalled SoftwareRecipeDesiredStateEnum = "INSTALLED"
SoftwareRecipeDesiredStateEnumUpdated SoftwareRecipeDesiredStateEnum = "UPDATED"
SoftwareRecipeDesiredStateEnumRemoved SoftwareRecipeDesiredStateEnum = "REMOVED"
)


type SoftwareRecipe struct {
    Artifacts []SoftwareRecipeArtifact `json:"artifacts,omitempty"`
    DesiredState *SoftwareRecipeDesiredStateEnum `json:"desiredState,omitempty"`
    InstallSteps []SoftwareRecipeStep `json:"installSteps,omitempty"`
    Name *string `json:"name,omitempty"`
    UpdateSteps []SoftwareRecipeStep `json:"updateSteps,omitempty"`
    Version *string `json:"version,omitempty"`
    
}

