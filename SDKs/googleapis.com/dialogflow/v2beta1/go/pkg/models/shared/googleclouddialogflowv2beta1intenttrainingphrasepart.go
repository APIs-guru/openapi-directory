package shared

// GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart
// Represents a part of a training phrase.
type GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart struct {
	Alias       *string `json:"alias,omitempty"`
	EntityType  *string `json:"entityType,omitempty"`
	Text        *string `json:"text,omitempty"`
	UserDefined *bool   `json:"userDefined,omitempty"`
}
