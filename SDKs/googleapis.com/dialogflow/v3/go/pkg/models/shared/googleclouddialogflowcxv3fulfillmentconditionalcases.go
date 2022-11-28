package shared

// GoogleCloudDialogflowCxV3FulfillmentConditionalCases
// A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
type GoogleCloudDialogflowCxV3FulfillmentConditionalCases struct {
	Cases []GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCase `json:"cases,omitempty"`
}

// GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput
// A list of cascading if-else conditions. Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
type GoogleCloudDialogflowCxV3FulfillmentConditionalCasesInput struct {
	Cases []GoogleCloudDialogflowCxV3FulfillmentConditionalCasesCaseInput `json:"cases,omitempty"`
}
