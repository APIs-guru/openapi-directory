package shared

// SecretVersion
// Configuration for a single version.
type SecretVersion struct {
	Path    *string `json:"path,omitempty"`
	Version *string `json:"version,omitempty"`
}
