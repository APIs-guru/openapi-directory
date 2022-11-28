package shared

// MetadataLabels
// Defines a name-pair value for a single label.
type MetadataLabels struct {
	LabelName  *string `json:"labelName,omitempty"`
	LabelValue *string `json:"labelValue,omitempty"`
}
