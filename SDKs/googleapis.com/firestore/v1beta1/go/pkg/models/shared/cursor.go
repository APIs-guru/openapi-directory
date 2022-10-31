package shared



type Cursor struct {
    Before *bool `json:"before,omitempty"`
    Values []Value `json:"values,omitempty"`
    
}

