package shared

// SkippedDetail
// Details for an outcome with a SKIPPED outcome summary.
type SkippedDetail struct {
	IncompatibleAppVersion   *bool `json:"incompatibleAppVersion,omitempty"`
	IncompatibleArchitecture *bool `json:"incompatibleArchitecture,omitempty"`
	IncompatibleDevice       *bool `json:"incompatibleDevice,omitempty"`
}
