package shared




type VariableStateEnum string

const (
    VariableStateEnumVariableStateUnspecified VariableStateEnum = "VARIABLE_STATE_UNSPECIFIED"
VariableStateEnumUpdated VariableStateEnum = "UPDATED"
VariableStateEnumDeleted VariableStateEnum = "DELETED"
)


type Variable struct {
    Name *string `json:"name,omitempty"`
    State *VariableStateEnum `json:"state,omitempty"`
    Text *string `json:"text,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

