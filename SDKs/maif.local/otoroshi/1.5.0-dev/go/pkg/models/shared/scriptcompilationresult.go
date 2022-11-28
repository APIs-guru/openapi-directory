package shared

// ScriptCompilationResult
// The result of the compilation of a Script
type ScriptCompilationResult struct {
	Done  bool                    `json:"done"`
	Error *ScriptCompilationError `json:"error,omitempty"`
}
