package shared

type GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum string

const (
	GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumTypeUnspecified GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum = "TYPE_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumExample         GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum = "EXAMPLE"
	GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnumTemplate        GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum = "TEMPLATE"
)

type GoogleCloudDialogflowV2beta1IntentTrainingPhrase struct {
	Name            *string                                                   `json:"name"`
	Parts           []GoogleCloudDialogflowV2beta1IntentTrainingPhrasePart    `json:"parts"`
	TimesAddedCount *int32                                                    `json:"timesAddedCount"`
	Type            *GoogleCloudDialogflowV2beta1IntentTrainingPhraseTypeEnum `json:"type"`
}
