package shared

// XcodeVersion
// An Xcode version that an iOS version is compatible with.
type XcodeVersion struct {
	Tags    []string `json:"tags,omitempty"`
	Version *string  `json:"version,omitempty"`
}
