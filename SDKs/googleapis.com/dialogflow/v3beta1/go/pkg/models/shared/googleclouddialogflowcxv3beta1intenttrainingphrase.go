package shared

// GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase
// Represents an example that the agent is trained on to identify the intent.
type GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase struct {
	ID          *string                                                  `json:"id,omitempty"`
	Parts       []GoogleCloudDialogflowCxV3beta1IntentTrainingPhrasePart `json:"parts,omitempty"`
	RepeatCount *int32                                                   `json:"repeatCount,omitempty"`
}
