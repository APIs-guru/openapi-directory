package shared

type SoftwareRecipeStepRunScriptInterpreterEnum string

const (
	SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified SoftwareRecipeStepRunScriptInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	SoftwareRecipeStepRunScriptInterpreterEnumShell                  SoftwareRecipeStepRunScriptInterpreterEnum = "SHELL"
	SoftwareRecipeStepRunScriptInterpreterEnumPowershell             SoftwareRecipeStepRunScriptInterpreterEnum = "POWERSHELL"
)

// SoftwareRecipeStepRunScript
// Runs a script through an interpreter.
type SoftwareRecipeStepRunScript struct {
	AllowedExitCodes []int32                                     `json:"allowedExitCodes,omitempty"`
	Interpreter      *SoftwareRecipeStepRunScriptInterpreterEnum `json:"interpreter,omitempty"`
	Script           *string                                     `json:"script,omitempty"`
}
