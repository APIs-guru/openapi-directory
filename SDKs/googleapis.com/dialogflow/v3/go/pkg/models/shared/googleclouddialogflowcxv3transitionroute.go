package shared

type GoogleCloudDialogflowCxV3TransitionRoute struct {
	Condition          *string                               `json:"condition,omitempty"`
	Intent             *string                               `json:"intent,omitempty"`
	Name               *string                               `json:"name,omitempty"`
	TargetFlow         *string                               `json:"targetFlow,omitempty"`
	TargetPage         *string                               `json:"targetPage,omitempty"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3Fulfillment `json:"triggerFulfillment,omitempty"`
}
