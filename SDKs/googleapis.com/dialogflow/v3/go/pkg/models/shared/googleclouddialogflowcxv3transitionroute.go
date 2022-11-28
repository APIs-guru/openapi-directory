package shared

// GoogleCloudDialogflowCxV3TransitionRoute
// A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
type GoogleCloudDialogflowCxV3TransitionRoute struct {
	Condition          *string                               `json:"condition,omitempty"`
	Intent             *string                               `json:"intent,omitempty"`
	Name               *string                               `json:"name,omitempty"`
	TargetFlow         *string                               `json:"targetFlow,omitempty"`
	TargetPage         *string                               `json:"targetPage,omitempty"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3Fulfillment `json:"triggerFulfillment,omitempty"`
}

// GoogleCloudDialogflowCxV3TransitionRouteInput
// A transition route specifies a intent that can be matched and/or a data condition that can be evaluated during a session. When a specified transition is matched, the following actions are taken in order: * If there is a `trigger_fulfillment` associated with the transition, it will be called. * If there is a `target_page` associated with the transition, the session will transition into the specified page. * If there is a `target_flow` associated with the transition, the session will transition into the specified flow.
type GoogleCloudDialogflowCxV3TransitionRouteInput struct {
	Condition          *string                                    `json:"condition,omitempty"`
	Intent             *string                                    `json:"intent,omitempty"`
	TargetFlow         *string                                    `json:"targetFlow,omitempty"`
	TargetPage         *string                                    `json:"targetPage,omitempty"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3FulfillmentInput `json:"triggerFulfillment,omitempty"`
}
