package shared



type GoogleCloudDialogflowCxV3Fulfillment struct {
    ConditionalCases []GoogleCloudDialogflowCxV3FulfillmentConditionalCases `json:"conditionalCases,omitempty"`
    Messages []GoogleCloudDialogflowCxV3ResponseMessage `json:"messages,omitempty"`
    ReturnPartialResponses *bool `json:"returnPartialResponses,omitempty"`
    SetParameterActions []GoogleCloudDialogflowCxV3FulfillmentSetParameterAction `json:"setParameterActions,omitempty"`
    Tag *string `json:"tag,omitempty"`
    Webhook *string `json:"webhook,omitempty"`
    
}

