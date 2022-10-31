package shared



type SkippedDetail struct {
    IncompatibleAppVersion *bool `json:"incompatibleAppVersion,omitempty"`
    IncompatibleArchitecture *bool `json:"incompatibleArchitecture,omitempty"`
    IncompatibleDevice *bool `json:"incompatibleDevice,omitempty"`
    
}

