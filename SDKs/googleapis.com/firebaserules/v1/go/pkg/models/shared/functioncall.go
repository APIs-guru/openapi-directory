package shared



type FunctionCall struct {
    Args []interface{} `json:"args,omitempty"`
    Function *string `json:"function,omitempty"`
    
}

