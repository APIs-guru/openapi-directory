package shared

// GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput
// Configuration for how the filling of a parameter should be handled.
type GoogleCloudDialogflowCxV3beta1FormParameterFillBehaviorInput struct {
	InitialPromptFulfillment *GoogleCloudDialogflowCxV3beta1FulfillmentInput   `json:"initialPromptFulfillment,omitempty"`
	RepromptEventHandlers    []GoogleCloudDialogflowCxV3beta1EventHandlerInput `json:"repromptEventHandlers,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior
// Configuration for how the filling of a parameter should be handled.
type GoogleCloudDialogflowCxV3beta1FormParameterFillBehavior struct {
	InitialPromptFulfillment *GoogleCloudDialogflowCxV3beta1Fulfillment   `json:"initialPromptFulfillment,omitempty"`
	RepromptEventHandlers    []GoogleCloudDialogflowCxV3beta1EventHandler `json:"repromptEventHandlers,omitempty"`
}
