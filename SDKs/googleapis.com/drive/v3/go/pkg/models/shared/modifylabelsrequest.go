package shared

type ModifyLabelsRequest struct {
	Kind               *string             `json:"kind"`
	LabelModifications []LabelModification `json:"labelModifications"`
}
