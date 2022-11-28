package shared

// GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput
// Configuration for how the filling of a parameter should be handled.
type GoogleCloudDialogflowCxV3FormParameterFillBehaviorInput struct {
	InitialPromptFulfillment *GoogleCloudDialogflowCxV3FulfillmentInput   `json:"initialPromptFulfillment,omitempty"`
	RepromptEventHandlers    []GoogleCloudDialogflowCxV3EventHandlerInput `json:"repromptEventHandlers,omitempty"`
}

// GoogleCloudDialogflowCxV3FormParameterFillBehavior
// Configuration for how the filling of a parameter should be handled.
type GoogleCloudDialogflowCxV3FormParameterFillBehavior struct {
	InitialPromptFulfillment *GoogleCloudDialogflowCxV3Fulfillment   `json:"initialPromptFulfillment,omitempty"`
	RepromptEventHandlers    []GoogleCloudDialogflowCxV3EventHandler `json:"repromptEventHandlers,omitempty"`
}
