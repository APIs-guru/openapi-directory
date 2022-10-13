package shared

type ExecStepConfigInterpreterEnum string

const (
	ExecStepConfigInterpreterEnumInterpreterUnspecified ExecStepConfigInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	ExecStepConfigInterpreterEnumNone                   ExecStepConfigInterpreterEnum = "NONE"
	ExecStepConfigInterpreterEnumShell                  ExecStepConfigInterpreterEnum = "SHELL"
	ExecStepConfigInterpreterEnumPowershell             ExecStepConfigInterpreterEnum = "POWERSHELL"
)

type ExecStepConfig struct {
	AllowedSuccessCodes []int32                        `json:"allowedSuccessCodes"`
	GcsObject           *GcsObject                     `json:"gcsObject"`
	Interpreter         *ExecStepConfigInterpreterEnum `json:"interpreter"`
	LocalPath           *string                        `json:"localPath"`
}
