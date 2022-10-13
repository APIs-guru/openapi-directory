package shared

type GoogleCloudDialogflowCxV3EventHandler struct {
	Event              *string                               `json:"event"`
	Name               *string                               `json:"name"`
	TargetFlow         *string                               `json:"targetFlow"`
	TargetPage         *string                               `json:"targetPage"`
	TriggerFulfillment *GoogleCloudDialogflowCxV3Fulfillment `json:"triggerFulfillment"`
}
