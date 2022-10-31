package shared



type Sink struct {
    Codec map[string]interface{} `json:"codec,omitempty"`
    Spec map[string]interface{} `json:"spec,omitempty"`
    
}

