package shared

type Label struct {
	Fields     map[string]LabelField `json:"fields"`
	ID         *string               `json:"id"`
	Kind       *string               `json:"kind"`
	RevisionID *string               `json:"revisionId"`
}
