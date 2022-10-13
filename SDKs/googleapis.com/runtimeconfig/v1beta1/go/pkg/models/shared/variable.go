package shared

type VariableStateEnum string

const (
	VariableStateEnumVariableStateUnspecified VariableStateEnum = "VARIABLE_STATE_UNSPECIFIED"
	VariableStateEnumUpdated                  VariableStateEnum = "UPDATED"
	VariableStateEnumDeleted                  VariableStateEnum = "DELETED"
)

type Variable struct {
	Name       *string            `json:"name"`
	State      *VariableStateEnum `json:"state"`
	Text       *string            `json:"text"`
	UpdateTime *string            `json:"updateTime"`
	Value      *string            `json:"value"`
}
