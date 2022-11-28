package shared

// Label
// Representation of a label and its fields.
type Label struct {
	Fields     map[string]LabelField `json:"fields,omitempty"`
	ID         *string               `json:"id,omitempty"`
	Kind       *string               `json:"kind,omitempty"`
	RevisionID *string               `json:"revisionId,omitempty"`
}
