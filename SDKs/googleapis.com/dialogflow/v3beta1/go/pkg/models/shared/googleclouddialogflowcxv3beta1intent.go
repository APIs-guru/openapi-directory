package shared



type GoogleCloudDialogflowCxV3beta1Intent struct {
    Description *string `json:"description,omitempty"`
    DisplayName *string `json:"displayName,omitempty"`
    IsFallback *bool `json:"isFallback,omitempty"`
    Labels map[string]string `json:"labels,omitempty"`
    Name *string `json:"name,omitempty"`
    Parameters []GoogleCloudDialogflowCxV3beta1IntentParameter `json:"parameters,omitempty"`
    Priority *int32 `json:"priority,omitempty"`
    TrainingPhrases []GoogleCloudDialogflowCxV3beta1IntentTrainingPhrase `json:"trainingPhrases,omitempty"`
    
}

