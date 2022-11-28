package shared

// GoogleCloudDialogflowCxV3IntentTrainingPhrase
// Represents an example that the agent is trained on to identify the intent.
type GoogleCloudDialogflowCxV3IntentTrainingPhrase struct {
	ID          *string                                             `json:"id,omitempty"`
	Parts       []GoogleCloudDialogflowCxV3IntentTrainingPhrasePart `json:"parts,omitempty"`
	RepeatCount *int32                                              `json:"repeatCount,omitempty"`
}
