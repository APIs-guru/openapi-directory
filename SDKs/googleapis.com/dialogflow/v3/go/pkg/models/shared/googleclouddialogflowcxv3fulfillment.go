package shared

type GoogleCloudDialogflowCxV3Fulfillment struct {
	ConditionalCases       []GoogleCloudDialogflowCxV3FulfillmentConditionalCases   `json:"conditionalCases"`
	Messages               []GoogleCloudDialogflowCxV3ResponseMessage               `json:"messages"`
	ReturnPartialResponses *bool                                                    `json:"returnPartialResponses"`
	SetParameterActions    []GoogleCloudDialogflowCxV3FulfillmentSetParameterAction `json:"setParameterActions"`
	Tag                    *string                                                  `json:"tag"`
	Webhook                *string                                                  `json:"webhook"`
}
