package shared

type SoftwareRecipeDesiredStateEnum string

const (
	SoftwareRecipeDesiredStateEnumDesiredStateUnspecified SoftwareRecipeDesiredStateEnum = "DESIRED_STATE_UNSPECIFIED"
	SoftwareRecipeDesiredStateEnumInstalled               SoftwareRecipeDesiredStateEnum = "INSTALLED"
	SoftwareRecipeDesiredStateEnumUpdated                 SoftwareRecipeDesiredStateEnum = "UPDATED"
	SoftwareRecipeDesiredStateEnumRemoved                 SoftwareRecipeDesiredStateEnum = "REMOVED"
)

type SoftwareRecipe struct {
	Artifacts    []SoftwareRecipeArtifact        `json:"artifacts"`
	DesiredState *SoftwareRecipeDesiredStateEnum `json:"desiredState"`
	InstallSteps []SoftwareRecipeStep            `json:"installSteps"`
	Name         *string                         `json:"name"`
	UpdateSteps  []SoftwareRecipeStep            `json:"updateSteps"`
	Version      *string                         `json:"version"`
}
