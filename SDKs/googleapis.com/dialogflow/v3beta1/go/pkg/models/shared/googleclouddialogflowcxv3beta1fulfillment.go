package shared

type GoogleCloudDialogflowCxV3beta1Fulfillment struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases   `json:"conditionalCases,omitempty"`
	Messages               []GoogleCloudDialogflowCxV3beta1ResponseMessage               `json:"messages,omitempty"`
	ReturnPartialResponses *bool                                                         `json:"returnPartialResponses,omitempty"`
	SetParameterActions    []GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction `json:"setParameterActions,omitempty"`
	Tag                    *string                                                       `json:"tag,omitempty"`
	Webhook                *string                                                       `json:"webhook,omitempty"`
}
