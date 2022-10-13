package shared

type GoogleCloudDialogflowCxV3beta1Fulfillment struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases   `json:"conditionalCases"`
	Messages               []GoogleCloudDialogflowCxV3beta1ResponseMessage               `json:"messages"`
	ReturnPartialResponses *bool                                                         `json:"returnPartialResponses"`
	SetParameterActions    []GoogleCloudDialogflowCxV3beta1FulfillmentSetParameterAction `json:"setParameterActions"`
	Tag                    *string                                                       `json:"tag"`
	Webhook                *string                                                       `json:"webhook"`
}
