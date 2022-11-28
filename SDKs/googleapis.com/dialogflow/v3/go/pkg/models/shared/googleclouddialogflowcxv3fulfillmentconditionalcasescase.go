package shared

// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase
// Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
type GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase struct {
	CaseContent []GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContent `json:"caseContent,omitempty"`
	Condition   *string                                                               `json:"condition,omitempty"`
}

// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput
// Each case has a Boolean condition. When it is evaluated to be True, the corresponding messages will be selected and evaluated recursively.
type GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput struct {
	CaseContent []GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseCaseContentInput `json:"caseContent,omitempty"`
	Condition   *string                                                                    `json:"condition,omitempty"`
}
