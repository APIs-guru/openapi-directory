package shared

// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput
// Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput struct {
	CaseContent []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContentInput `json:"caseContent,omitempty"`
	Condition   *string                                                                         `json:"condition,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase
// Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase struct {
	CaseContent []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseCaseContent `json:"caseContent,omitempty"`
	Condition   *string                                                                    `json:"condition,omitempty"`
}
