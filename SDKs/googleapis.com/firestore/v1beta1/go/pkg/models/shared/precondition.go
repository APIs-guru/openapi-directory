package shared



type Precondition struct {
    Exists *bool `json:"exists,omitempty"`
    UpdateTime *string `json:"updateTime,omitempty"`
    
}

