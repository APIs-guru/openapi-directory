package shared

// ModifyLabelsRequest
// A request to modify the set of labels on a file. This request may contain many modifications that will either all succeed or all fail transactionally.
type ModifyLabelsRequest struct {
	Kind               *string             `json:"kind,omitempty"`
	LabelModifications []LabelModification `json:"labelModifications,omitempty"`
}
