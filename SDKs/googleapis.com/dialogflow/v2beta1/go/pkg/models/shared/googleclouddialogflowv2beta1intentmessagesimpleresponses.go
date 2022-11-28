package shared

// GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses
// The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
type GoogleCloudDialogflowV2beta1IntentMessageSimpleResponses struct {
	SimpleResponses []GoogleCloudDialogflowV2beta1IntentMessageSimpleResponse `json:"simpleResponses,omitempty"`
}
