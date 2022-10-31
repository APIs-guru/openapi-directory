package shared



type OrderLineItemReturnInfo struct {
    DaysToReturn *int32 `json:"daysToReturn,omitempty"`
    IsReturnable *bool `json:"isReturnable,omitempty"`
    PolicyURL *string `json:"policyUrl,omitempty"`
    
}

