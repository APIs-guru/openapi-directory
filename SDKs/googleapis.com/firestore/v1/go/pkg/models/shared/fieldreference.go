package shared

// FieldReference
// A reference to a field in a document, ex: `stats.operations`.
type FieldReference struct {
	FieldPath *string `json:"fieldPath,omitempty"`
}
