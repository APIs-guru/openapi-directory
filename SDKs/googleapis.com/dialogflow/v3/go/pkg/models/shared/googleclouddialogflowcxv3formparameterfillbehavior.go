package shared

type GoogleCloudDialogflowCxV3FormParameterFillBehavior struct {
	InitialPromptFulfillment *GoogleCloudDialogflowCxV3Fulfillment   `json:"initialPromptFulfillment,omitempty"`
	RepromptEventHandlers    []GoogleCloudDialogflowCxV3EventHandler `json:"repromptEventHandlers,omitempty"`
}
