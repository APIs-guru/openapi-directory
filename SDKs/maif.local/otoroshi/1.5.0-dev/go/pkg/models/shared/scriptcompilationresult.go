package shared



type ScriptCompilationResult struct {
    Done bool `json:"done"`
    Error *ScriptCompilationError `json:"error,omitempty"`
    
}

