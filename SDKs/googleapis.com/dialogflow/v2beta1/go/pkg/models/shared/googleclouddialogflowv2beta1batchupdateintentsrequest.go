package shared




type GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum string

const (
    GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewUnspecified GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_UNSPECIFIED"
GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnumIntentViewFull GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum = "INTENT_VIEW_FULL"
)


type GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequest struct {
    IntentBatchInline *GoogleCloudDialogflowV2beta1IntentBatch `json:"intentBatchInline,omitempty"`
    IntentBatchURI *string `json:"intentBatchUri,omitempty"`
    IntentView *GoogleCloudDialogflowV2beta1BatchUpdateIntentsRequestIntentViewEnum `json:"intentView,omitempty"`
    LanguageCode *string `json:"languageCode,omitempty"`
    UpdateMask *string `json:"updateMask,omitempty"`
    
}

