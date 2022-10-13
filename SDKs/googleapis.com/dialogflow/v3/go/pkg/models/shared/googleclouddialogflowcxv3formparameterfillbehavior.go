package shared

type GoogleCloudDialogflowCxV3FormParameterFillBehavior struct {
	InitialPromptFulfillment *GoogleCloudDialogflowCxV3Fulfillment   `json:"initialPromptFulfillment"`
	RepromptEventHandlers    []GoogleCloudDialogflowCxV3EventHandler `json:"repromptEventHandlers"`
}
