package shared

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
