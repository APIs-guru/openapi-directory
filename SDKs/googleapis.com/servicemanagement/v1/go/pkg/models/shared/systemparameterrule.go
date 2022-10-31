package shared



type SystemParameterRule struct {
    Parameters []SystemParameter `json:"parameters,omitempty"`
    Selector *string `json:"selector,omitempty"`
    
}

