package shared

type GoogleCloudDialogflowCxV3TransitionRoute struct {
	Condition          *string                               `json:"condition"`
	Intent             *string                               `json:"intent"`
	Name               *string                               `json:"name"`
	TargetFlow         *string                               `json:"targetFlow"`
	TargetPage         *string                               `json:"targetPage"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3Fulfillment `json:"triggerFulfillment"`
}
