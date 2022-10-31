package shared



type GoogleCloudDialogflowCxV3EventHandler struct {
    Event *string `json:"event,omitempty"`
    Name *string `json:"name,omitempty"`
    TargetFlow *string `json:"targetFlow,omitempty"`
    TargetPage *string `json:"targetPage,omitempty"`
    TriggerFulfillment *GoogleCloudDialogflowCxV3Fulfillment `json:"triggerFulfillment,omitempty"`
    
}

