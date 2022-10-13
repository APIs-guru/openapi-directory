package shared

type RuntimeInfo struct {
	DiagnosticOutputURI *string           `json:"diagnosticOutputUri"`
	Endpoints           map[string]string `json:"endpoints"`
	OutputURI           *string           `json:"outputUri"`
}
