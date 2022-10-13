package shared

type BuildVersion struct {
	Metadata map[string]interface{} `json:"metadata"`
	Version  *SemanticVersion       `json:"version"`
}
