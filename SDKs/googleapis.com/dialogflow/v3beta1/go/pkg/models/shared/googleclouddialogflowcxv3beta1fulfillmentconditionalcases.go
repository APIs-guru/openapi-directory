package shared

// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases
// A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCases struct {
	Cases []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCase `json:"cases,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput
// A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
type GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesInput struct {
	Cases []GoogleCloudDialogflowCxV3beta1FulfillmentConditionalCasesCaseInput `json:"cases,omitempty"`
}
