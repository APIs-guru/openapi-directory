package shared



type FunctionMock struct {
    Args []Arg `json:"args,omitempty"`
    Function *string `json:"function,omitempty"`
    Result *Result `json:"result,omitempty"`
    
}

