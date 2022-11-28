package shared

// Content
// The Content resource.
type Content struct {
	Files    []File  `json:"files,omitempty"`
	ScriptID *string `json:"scriptId,omitempty"`
}
