package shared

type VariableStateEnum string

const (
	VariableStateEnumVariableStateUnspecified VariableStateEnum = "VARIABLE_STATE_UNSPECIFIED"
	VariableStateEnumUpdated                  VariableStateEnum = "UPDATED"
	VariableStateEnumDeleted                  VariableStateEnum = "DELETED"
)

// Variable
// Describes a single variable within a RuntimeConfig resource. The name denotes the hierarchical variable name. For example, `ports/serving_port` is a valid variable name. The variable value is an opaque string and only leaf variables can have values (that is, variables that do not have any child variables).
type Variable struct {
	Name       *string            `json:"name,omitempty"`
	State      *VariableStateEnum `json:"state,omitempty"`
	Text       *string            `json:"text,omitempty"`
	UpdateTime *string            `json:"updateTime,omitempty"`
	Value      *string            `json:"value,omitempty"`
}
