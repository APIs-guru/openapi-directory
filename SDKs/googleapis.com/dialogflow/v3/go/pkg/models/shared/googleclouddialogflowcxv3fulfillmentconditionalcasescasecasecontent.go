package shared

// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput
// The list of messages or conditional cases to activate for this case.
type GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput struct {
	AdditionalCases *GoogleCloudDialogflowCxV3FulfillmentConditionalCases `json:"additionalCases,omitempty"`
	Message         *GoogleCloudDialogflowCxV3ResponseMessageInput        `json:"message,omitempty"`
}

// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent
// The list of messages or conditional cases to activate for this case.
type GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent struct {
	AdditionalCases *GoogleCloudDialogflowCxV3FulfillmentConditionalCases `json:"additionalCases,omitempty"`
	Message         *GoogleCloudDialogflowCxV3ResponseMessage             `json:"message,omitempty"`
}
