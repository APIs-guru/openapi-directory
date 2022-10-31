package shared



type Error struct {
    Context *string `json:"context,omitempty"`
    Payload *string `json:"payload,omitempty"`
    StackTrace *StackTrace `json:"stackTrace,omitempty"`
    
}

