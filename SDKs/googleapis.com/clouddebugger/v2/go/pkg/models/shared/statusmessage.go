package shared

type StatusMessageRefersToEnum string

const (
	StatusMessageRefersToEnumUnspecified              StatusMessageRefersToEnum = "UNSPECIFIED"
	StatusMessageRefersToEnumBreakpointSourceLocation StatusMessageRefersToEnum = "BREAKPOINT_SOURCE_LOCATION"
	StatusMessageRefersToEnumBreakpointCondition      StatusMessageRefersToEnum = "BREAKPOINT_CONDITION"
	StatusMessageRefersToEnumBreakpointExpression     StatusMessageRefersToEnum = "BREAKPOINT_EXPRESSION"
	StatusMessageRefersToEnumBreakpointAge            StatusMessageRefersToEnum = "BREAKPOINT_AGE"
	StatusMessageRefersToEnumBreakpointCanaryFailed   StatusMessageRefersToEnum = "BREAKPOINT_CANARY_FAILED"
	StatusMessageRefersToEnumVariableName             StatusMessageRefersToEnum = "VARIABLE_NAME"
	StatusMessageRefersToEnumVariableValue            StatusMessageRefersToEnum = "VARIABLE_VALUE"
)

type StatusMessage struct {
	Description *FormatMessage             `json:"description,omitempty"`
	IsError     *bool                      `json:"isError,omitempty"`
	RefersTo    *StatusMessageRefersToEnum `json:"refersTo,omitempty"`
}
