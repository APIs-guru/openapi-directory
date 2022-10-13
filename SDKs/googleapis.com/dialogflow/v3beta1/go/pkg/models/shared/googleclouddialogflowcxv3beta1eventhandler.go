package shared

type GoogleCloudDialogflowCxV3beta1EventHandler struct {
	Event              *string                                    `json:"event"`
	Name               *string                                    `json:"name"`
	TargetFlow         *string                                    `json:"targetFlow"`
	TargetPage         *string                                    `json:"targetPage"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3beta1Fulfillment `json:"triggerFulfillment"`
}
