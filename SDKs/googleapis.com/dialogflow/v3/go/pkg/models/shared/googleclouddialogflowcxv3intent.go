package shared

// GoogleCloudDialogflowCxV3Intent
// An intent represents a user's intent to interact with a conversational agent. You can provide information for the Dialogflow API to use to match user input to an intent by adding training phrases (i.e., examples of user input) to your intent.
type GoogleCloudDialogflowCxV3Intent struct {
	Description     *string                                         `json:"description,omitempty"`
	DisplayName     *string                                         `json:"displayName,omitempty"`
	IsFallback      *bool                                           `json:"isFallback,omitempty"`
	Labels          map[string]string                               `json:"labels,omitempty"`
	Name            *string                                         `json:"name,omitempty"`
	Parameters      []GoogleCloudDialogflowCxV3IntentParameter      `json:"parameters,omitempty"`
	Priority        *int32                                          `json:"priority,omitempty"`
	TrainingPhrases []GoogleCloudDialogflowCxV3IntentTrainingPhrase `json:"trainingPhrases,omitempty"`
}
