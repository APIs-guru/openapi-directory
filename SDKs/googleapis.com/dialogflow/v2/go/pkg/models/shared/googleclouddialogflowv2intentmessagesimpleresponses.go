package shared

// GoogleCloudDialogflowV2IntentMessageSimpleResponses
// The collection of simple response candidates. This message in `QueryResult.fulfillment_messages` and `WebhookResponse.fulfillment_messages` should contain only one `SimpleResponse`.
type GoogleCloudDialogflowV2IntentMessageSimpleResponses struct {
	SimpleResponses []GoogleCloudDialogflowV2IntentMessageSimpleResponse `json:"simpleResponses,omitempty"`
}
