package shared

type RuntimeInfo struct {
	DiagnosticOutputURI *string           `json:"diagnosticOutputUri,omitempty"`
	Endpoints           map[string]string `json:"endpoints,omitempty"`
	OutputURI           *string           `json:"outputUri,omitempty"`
}
