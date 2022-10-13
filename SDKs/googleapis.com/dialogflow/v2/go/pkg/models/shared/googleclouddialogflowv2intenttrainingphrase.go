package shared

type GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum string

const (
	GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTypeUnspecified GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumExample         GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum = "EXAMPLE"
	GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnumTemplate        GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum = "TEMPLATE"
)

type GoogleCloudDialogflowV2IntentTrainingPhrase struct {
	Name            *string                                              `json:"name"`
	Parts           []GoogleCloudDialogflowV2IntentTrainingPhrasePart    `json:"parts"`
	TimesAddedCount *int32                                               `json:"timesAddedCount"`
	Type            *GoogleCloudDialogflowV2IntentTrainingPhraseTypeEnum `json:"type"`
}
