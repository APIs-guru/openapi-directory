package shared



type Entity struct {
    Key *Key `json:"key,omitempty"`
    Properties map[string]Value `json:"properties,omitempty"`
    
}

