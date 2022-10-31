package shared

type ExecStepConfigInterpreterEnum string

const (
	ExecStepConfigInterpreterEnumInterpreterUnspecified ExecStepConfigInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	ExecStepConfigInterpreterEnumNone                   ExecStepConfigInterpreterEnum = "NONE"
	ExecStepConfigInterpreterEnumShell                  ExecStepConfigInterpreterEnum = "SHELL"
	ExecStepConfigInterpreterEnumPowershell             ExecStepConfigInterpreterEnum = "POWERSHELL"
)

type ExecStepConfig struct {
	AllowedSuccessCodes []int32                        `json:"allowedSuccessCodes,omitempty"`
	GcsObject           *GcsObject                     `json:"gcsObject,omitempty"`
	Interpreter         *ExecStepConfigInterpreterEnum `json:"interpreter,omitempty"`
	LocalPath           *string                        `json:"localPath,omitempty"`
}
