package shared



type Step struct {
    Kind *string `json:"kind,omitempty"`
    Name *string `json:"name,omitempty"`
    Properties map[string]interface{} `json:"properties,omitempty"`
    
}

