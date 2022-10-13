package shared

type GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum string

const (
	GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewUnspecified GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewFull        GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_FULL"
)

type GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest struct {
	IntentBatchInline *GoogleCloudDialogflowV2beta1IntentBatch                             `json:"intentBatchInline"`
	IntentBatchURI    *string                                                              `json:"intentBatchUri"`
	IntentView        *GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum `json:"intentView"`
	LanguageCode      *string                                                              `json:"languageCode"`
	UpdateMask        *string                                                              `json:"updateMask"`
}
