package shared

// GoogleCloudDialogflowCxV3beta1EventHandlerInput
// An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
type GoogleCloudDialogflowCxV3beta1EventHandlerInput struct {
	Event              *string                                         `json:"event,omitempty"`
	TargetFlow         *string                                         `json:"targetFlow,omitempty"`
	TargetPage         *string                                         `json:"targetPage,omitempty"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3beta1FulfillmentInput `json:"triggerFulfillment,omitempty"`
}

// GoogleCloudDialogflowCxV3beta1EventHandler
// An event handler specifies an event that can be handled during a session. When the specified event happens, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the event, it will be called. * If there is a `target_page` associated with the event, the session will transition into the specified page. * If there is a `target_flow` associated with the event, the session will transition into the specified flow.
type GoogleCloudDialogflowCxV3beta1EventHandler struct {
	Event              *string                                    `json:"event,omitempty"`
	Name               *string                                    `json:"name,omitempty"`
	TargetFlow         *string                                    `json:"targetFlow,omitempty"`
	TargetPage         *string                                    `json:"targetPage,omitempty"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3beta1Fulfillment `json:"triggerFulfillment,omitempty"`
}
