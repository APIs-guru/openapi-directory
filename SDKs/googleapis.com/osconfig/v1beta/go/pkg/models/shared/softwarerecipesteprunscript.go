package shared

type SoftwareRecipeStepRunScriptInterpreterEnum string

const (
	SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified SoftwareRecipeStepRunScriptInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	SoftwareRecipeStepRunScriptInterpreterEnumShell                  SoftwareRecipeStepRunScriptInterpreterEnum = "SHELL"
	SoftwareRecipeStepRunScriptInterpreterEnumPowershell             SoftwareRecipeStepRunScriptInterpreterEnum = "POWERSHELL"
)

type SoftwareRecipeStepRunScript struct {
	AllowedExitCodes []int32                                     `json:"allowedExitCodes"`
	Interpreter      *SoftwareRecipeStepRunScriptInterpreterEnum `json:"interpreter"`
	Script           *string                                     `json:"script"`
}
