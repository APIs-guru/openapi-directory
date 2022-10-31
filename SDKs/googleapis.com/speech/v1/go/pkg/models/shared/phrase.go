package shared



type Phrase struct {
    Boost *float32 `json:"boost,omitempty"`
    Value *string `json:"value,omitempty"`
    
}

