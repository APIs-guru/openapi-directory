package shared

// SensitiveTextAnnotation
// A TextAnnotation specifies a text range that includes sensitive information.
type SensitiveTextAnnotation struct {
	Details map[string]Detail `json:"details,omitempty"`
}
