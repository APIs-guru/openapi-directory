package shared

// BuildVersion
// BuildVersion combines SemVer version of extension with free-form build information (i.e. 'alpha', 'private-build') as a set of strings.
type BuildVersion struct {
	Metadata map[string]interface{} `json:"metadata,omitempty"`
	Version  *SemanticVersion       `json:"version,omitempty"`
}
