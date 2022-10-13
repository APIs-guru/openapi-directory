package shared

type XcodeVersion struct {
	Tags    []string `json:"tags"`
	Version *string  `json:"version"`
}
