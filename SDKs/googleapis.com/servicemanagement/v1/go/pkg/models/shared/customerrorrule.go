package shared



type CustomErrorRule struct {
    IsErrorType *bool `json:"isErrorType,omitempty"`
    Selector *string `json:"selector,omitempty"`
    
}

