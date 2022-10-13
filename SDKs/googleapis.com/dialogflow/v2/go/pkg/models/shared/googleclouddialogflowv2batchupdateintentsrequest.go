package shared

type GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum string

const (
	GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnumIntentViewUnspecified GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
	GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnumIntentViewFull        GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_FULL"
)

type GoogleCloudDialogflowV2BatchUpdateIntentsRequest struct {
	IntentBatchInline *GoogleCloudDialogflowV2IntentBatch                             `json:"intentBatchInline"`
	IntentBatchURI    *string                                                         `json:"intentBatchUri"`
	IntentView        *GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum `json:"intentView"`
	LanguageCode      *string                                                         `json:"languageCode"`
	UpdateMask        *string                                                         `json:"updateMask"`
}
