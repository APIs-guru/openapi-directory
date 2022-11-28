package shared

// GoogleCloudDialogflowCxV3beta1Fulfillment
// A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
type GoogleCloudDialogflowCxV3beta1Fulfillment struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases   `json:"conditionalCases,omitempty"`
	Messages               []GoogleCloudDialogflowCxV3beta1ResponseMessage               `json:"messages,omitempty"`
	ReturnPartialResponses *bool                                                         `json:"returnPartialResponses,omitempty"`
	SetParameterActions    []GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction `json:"setParameterActions,omitempty"`
	Tag                    *string                                                       `json:"tag,omitempty"`
	Webhook                *string                                                       `json:"webhook,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1FulfillmentInput
// A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
type GoogleCloudDialogflowCxV3beta1FulfillmentInput struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput `json:"conditionalCases,omitempty"`
	Messages               []GoogleCloudDialogflowCxV3beta1ResponseMessageInput             `json:"messages,omitempty"`
	ReturnPartialResponses *bool                                                            `json:"returnPartialResponses,omitempty"`
	SetParameterActions    []GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction    `json:"setParameterActions,omitempty"`
	Tag                    *string                                                          `json:"tag,omitempty"`
	Webhook                *string                                                          `json:"webhook,omitempty"`
}
