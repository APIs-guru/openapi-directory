package shared

type XcodeVersion struct {
	Tags    []string `json:"tags,omitempty"`
	Version *string  `json:"version,omitempty"`
}
