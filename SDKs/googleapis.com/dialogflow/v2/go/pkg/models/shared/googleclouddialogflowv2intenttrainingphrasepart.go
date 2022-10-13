package shared

type GoogleCloudDialogflowV2IntentTrainingPhrasePart struct {
	Alias       *string `json:"alias"`
	EntityType  *string `json:"entityType"`
	Text        *string `json:"text"`
	UserDefined *bool   `json:"userDefined"`
}
