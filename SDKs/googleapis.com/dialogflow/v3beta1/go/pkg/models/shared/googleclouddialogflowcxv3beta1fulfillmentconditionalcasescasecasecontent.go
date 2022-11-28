package shared

// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent
// The list of messages or conditional cases to activate for this case.
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent struct {
	AdditionalCases *GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases `json:"additionalCases,omitempty"`
	Message         *GoogleCloudDialogflowCxV3beta1ResponseMessage             `json:"message,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput
// The list of messages or conditional cases to activate for this case.
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput struct {
	AdditionalCases *GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases `json:"additionalCases,omitempty"`
	Message         *GoogleCloudDialogflowCxV3beta1ResponseMessageInput        `json:"message,omitempty"`
}
