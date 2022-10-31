package shared



type Result struct {
    Undefined map[string]interface{} `json:"undefined,omitempty"`
    Value *interface{} `json:"value,omitempty"`
    
}

