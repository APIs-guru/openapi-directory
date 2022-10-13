package shared

type LabelModification struct {
	FieldModifications []LabelFieldModification `json:"fieldModifications"`
	Kind               *string                  `json:"kind"`
	LabelID            *string                  `json:"labelId"`
	RemoveLabel        *bool                    `json:"removeLabel"`
}
