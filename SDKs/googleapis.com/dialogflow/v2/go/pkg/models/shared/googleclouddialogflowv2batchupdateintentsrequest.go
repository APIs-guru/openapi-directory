package shared

type GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum string

const (
	GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnumIntentViewUnspecified GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
	GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnumIntentViewFull        GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_FULL"
)

type GoogleCloudDialogflowV2BatchUpdateIntentsRequestInput struct {
	IntentBatchInline *GoogleCloudDialogflowV2IntentBatchInput                        `json:"intentBatchInline,omitempty"`
	IntentBatchURI    *string                                                         `json:"intentBatchUri,omitempty"`
	IntentView        *GoogleCloudDialogflowV2BatchUpdateIntentsRequestIntentViewEnum `json:"intentView,omitempty"`
	LanguageCode      *string                                                         `json:"languageCode,omitempty"`
	UpdateMask        *string                                                         `json:"updateMask,omitempty"`
}
