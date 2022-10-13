package shared

type SkippedDetail struct {
	IncompatibleAppVersion   *bool `json:"incompatibleAppVersion"`
	IncompatibleArchitecture *bool `json:"incompatibleArchitecture"`
	IncompatibleDevice       *bool `json:"incompatibleDevice"`
}
