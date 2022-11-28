package shared

// SourceInfo
// Source information used to create a Service Config
type SourceInfo struct {
	SourceFiles []map[string]interface{} `json:"sourceFiles,omitempty"`
}
