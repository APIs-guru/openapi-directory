package shared

// DiagnoseRuntimeRequest
// Request for creating a notebook instance diagnostic file.
type DiagnoseRuntimeRequest struct {
	DiagnosticConfig *DiagnosticConfig `json:"diagnosticConfig,omitempty"`
}
