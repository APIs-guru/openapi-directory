package shared

// ChangeReport
// Change report associated with a particular service configuration. It contains a list of ConfigChanges based on the comparison between two service configurations.
type ChangeReport struct {
	ConfigChanges []ConfigChange `json:"configChanges,omitempty"`
}
