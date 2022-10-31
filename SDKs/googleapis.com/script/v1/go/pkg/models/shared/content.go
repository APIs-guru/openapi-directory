package shared



type Content struct {
    Files []File `json:"files,omitempty"`
    ScriptID *string `json:"scriptId,omitempty"`
    
}

