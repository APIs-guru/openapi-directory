package shared

type OsPolicyResourceExecResourceExecInterpreterEnum string

const (
	OsPolicyResourceExecResourceExecInterpreterEnumInterpreterUnspecified OsPolicyResourceExecResourceExecInterpreterEnum = "INTERPRETER_UNSPECIFIED"
	OsPolicyResourceExecResourceExecInterpreterEnumNone                   OsPolicyResourceExecResourceExecInterpreterEnum = "NONE"
	OsPolicyResourceExecResourceExecInterpreterEnumShell                  OsPolicyResourceExecResourceExecInterpreterEnum = "SHELL"
	OsPolicyResourceExecResourceExecInterpreterEnumPowershell             OsPolicyResourceExecResourceExecInterpreterEnum = "POWERSHELL"
)

type OsPolicyResourceExecResourceExec struct {
	Args           []string                                         `json:"args"`
	File           *OsPolicyResourceFile                            `json:"file"`
	Interpreter    *OsPolicyResourceExecResourceExecInterpreterEnum `json:"interpreter"`
	OutputFilePath *string                                          `json:"outputFilePath"`
	Script         *string                                          `json:"script"`
}
