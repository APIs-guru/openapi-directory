package shared

type GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum string

const (
	GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewUnspecified GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
	GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewFull        GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_FULL"
)

// GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput
// The request message for Intents.BatchUpdateIntents.
type GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestInput struct {
	IntentBatchInline *GoogleCloudDialogflowV2beta1IntentBatchInput                        `json:"intentBatchInline,omitempty"`
	IntentBatchURI    *string                                                              `json:"intentBatchUri,omitempty"`
	IntentView        *GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum `json:"intentView,omitempty"`
	LanguageCode      *string                                                              `json:"languageCode,omitempty"`
	UpdateMask        *string                                                              `json:"updateMask,omitempty"`
}
