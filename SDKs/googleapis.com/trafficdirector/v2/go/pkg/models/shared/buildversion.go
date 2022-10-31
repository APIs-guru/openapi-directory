package shared

type BuildVersion struct {
	Metadata map[string]interface{} `json:"metadata,omitempty"`
	Version  *SemanticVersion       `json:"version,omitempty"`
}
