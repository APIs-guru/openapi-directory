package shared

type LabelModification struct {
	FieldModifications []LabelFieldModification `json:"fieldModifications,omitempty"`
	Kind               *string                  `json:"kind,omitempty"`
	LabelID            *string                  `json:"labelId,omitempty"`
	RemoveLabel        *bool                    `json:"removeLabel,omitempty"`
}
