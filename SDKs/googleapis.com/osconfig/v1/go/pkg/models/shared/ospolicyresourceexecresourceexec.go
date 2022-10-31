package shared

type OsPolicyResourceExecResourceExecInterpreterEnum string

const (
	OsPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified OsPolicyResourceExecResourceExecInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	OsPolicyResourceExecResourceExecInterpreterEnumNone                   OsPolicyResourceExecResourceExecInterpreterEnum = "NONE"
	OsPolicyResourceExecResourceExecInterpreterEnumShell                  OsPolicyResourceExecResourceExecInterpreterEnum = "SHELL"
	OsPolicyResourceExecResourceExecInterpreterEnumPowershell             OsPolicyResourceExecResourceExecInterpreterEnum = "POWERSHELL"
)

type OsPolicyResourceExecResourceExec struct {
	Args           []string                                         `json:"args,omitempty"`
	File           *OsPolicyResourceFile                            `json:"file,omitempty"`
	Interpreter    *OsPolicyResourceExecResourceExecInterpreterEnum `json:"interpreter,omitempty"`
	OutputFilePath *string                                          `json:"outputFilePath,omitempty"`
	Script         *string                                          `json:"script,omitempty"`
}
