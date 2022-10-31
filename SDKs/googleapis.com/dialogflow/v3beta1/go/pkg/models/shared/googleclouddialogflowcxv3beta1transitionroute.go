package shared



type GoogleCloudDialogflowCxV3beta1TransitionRoute struct {
    Condition *string `json:"condition,omitempty"`
    Intent *string `json:"intent,omitempty"`
    Name *string `json:"name,omitempty"`
    TargetFlow *string `json:"targetFlow,omitempty"`
    TargetPage *string `json:"targetPage,omitempty"`
    TriggerFulfillment *GoogleCloudDialogflowCxV3beta1Fulfillment `json:"triggerFulfillment,omitempty"`
    
}

