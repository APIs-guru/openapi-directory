package shared

type GoogleCloudDialogflowCxV3beta1Intent struct {
	Description     *string                                              `json:"description"`
	DisplayName     *string                                              `json:"displayName"`
	IsFallback      *bool                                                `json:"isFallback"`
	Labels          map[string]string                                    `json:"labels"`
	Name            *string                                              `json:"name"`
	Parameters      []GoogleCloudDialogflowCxV3beta1IntentParameter      `json:"parameters"`
	Priority        *int32                                               `json:"priority"`
	TrainingPhrases []GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase `json:"trainingPhrases"`
}
