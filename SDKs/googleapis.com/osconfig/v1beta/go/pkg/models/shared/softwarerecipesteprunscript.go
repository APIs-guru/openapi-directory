package shared




type SoftwareRecipeStepRunScriptInterpreterEnum string

const (
    SoftwareRecipeStepRunScriptInterpreterEnumInterpreterUnspecified SoftwareRecipeStepRunScriptInterpreterEnum = "INTERPRETER_UNSPECIFIED"
SoftwareRecipeStepRunScriptInterpreterEnumShell SoftwareRecipeStepRunScriptInterpreterEnum = "SHELL"
SoftwareRecipeStepRunScriptInterpreterEnumPowershell SoftwareRecipeStepRunScriptInterpreterEnum = "POWERSHELL"
)


type SoftwareRecipeStepRunScript struct {
    AllowedExitCodes []int32 `json:"allowedExitCodes,omitempty"`
    Interpreter *SoftwareRecipeStepRunScriptInterpreterEnum `json:"interpreter,omitempty"`
    Script *string `json:"script,omitempty"`
    
}

