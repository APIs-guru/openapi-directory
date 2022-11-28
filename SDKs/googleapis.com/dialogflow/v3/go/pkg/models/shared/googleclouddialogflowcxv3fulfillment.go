package shared

// GoogleCloudDialogflowCxV3FulfillmentInput
// A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
type GoogleCloudDialogflowCxV3FulfillmentInput struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput `json:"conditionalCases,omitempty"`
	Messages               []GoogleCloudDialogflowCxV3ResponseMessageInput             `json:"messages,omitempty"`
	ReturnPartialResponses *bool                                                       `json:"returnPartialResponses,omitempty"`
	SetParameterActions    []GoogleCloudDialogflowCxV3FulfillmentSetParameterAction    `json:"setParameterActions,omitempty"`
	Tag                    *string                                                     `json:"tag,omitempty"`
	Webhook                *string                                                     `json:"webhook,omitempty"`
}

// GoogleCloudDialogflowCxV3Fulfillment
// A fulfillment can do one or more of the following actions at the same time: * Generate rich message responses. * Set parameter values. * Call the webhook. Fulfillments can be called at various stages in the Page or Form lifecycle. For example, when a DetectIntentRequest drives a session to enter a new page, the page's entry fulfillment can add a static response to the QueryResult in the returning DetectIntentResponse, call the webhook (for example, to load user data from a database), or both.
type GoogleCloudDialogflowCxV3Fulfillment struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3FulfillmentConditionalCases   `json:"conditionalCases,omitempty"`
	Messages               []GoogleCloudDialogflowCxV3ResponseMessage               `json:"messages,omitempty"`
	ReturnPartialResponses *bool                                                    `json:"returnPartialResponses,omitempty"`
	SetParameterActions    []GoogleCloudDialogflowCxV3FulfillmentSetParameterAction `json:"setParameterActions,omitempty"`
	Tag                    *string                                                  `json:"tag,omitempty"`
	Webhook                *string                                                  `json:"webhook,omitempty"`
}
