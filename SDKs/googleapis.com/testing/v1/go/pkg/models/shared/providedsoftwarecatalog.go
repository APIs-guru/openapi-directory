package shared

// ProvidedSoftwareCatalog
// The currently provided software environment on the devices under test.
type ProvidedSoftwareCatalog struct {
	AndroidxOrchestratorVersion *string `json:"androidxOrchestratorVersion,omitempty"`
	OrchestratorVersion         *string `json:"orchestratorVersion,omitempty"`
}
