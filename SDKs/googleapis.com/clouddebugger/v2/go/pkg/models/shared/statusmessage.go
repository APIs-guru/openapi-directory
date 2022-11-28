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

// StatusMessage
// Represents a contextual status message. The message can indicate an error or informational status, and refer to specific parts of the containing object. For example, the `Breakpoint.status` field can indicate an error referring to the `BREAKPOINT_SOURCE_LOCATION` with the message `Location not found`.
type StatusMessage struct {
	Description *FormatMessage             `json:"description,omitempty"`
	IsError     *bool                      `json:"isError,omitempty"`
	RefersTo    *StatusMessageRefersToEnum `json:"refersTo,omitempty"`
}
