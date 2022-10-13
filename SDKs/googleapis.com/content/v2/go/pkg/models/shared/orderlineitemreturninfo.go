package shared

type OrderLineItemReturnInfo struct {
	DaysToReturn *int32  `json:"daysToReturn"`
	IsReturnable *bool   `json:"isReturnable"`
	PolicyURL    *string `json:"policyUrl"`
}
