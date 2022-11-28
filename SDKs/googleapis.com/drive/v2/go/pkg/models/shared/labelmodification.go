package shared

// LabelModification
// A modification to a label on a file. A LabelModification can be used to apply a label to a file, update an existing label on a file, or remove a label from a file.
type LabelModification struct {
	FieldModifications []LabelFieldModification `json:"fieldModifications,omitempty"`
	Kind               *string                  `json:"kind,omitempty"`
	LabelID            *string                  `json:"labelId,omitempty"`
	RemoveLabel        *bool                    `json:"removeLabel,omitempty"`
}
