package shared

type OrderreturnsCreateOrderReturnResponse struct {
	ExecutionStatus *string              `json:"executionStatus"`
	Kind            *string              `json:"kind"`
	OrderReturn     *MerchantOrderReturn `json:"orderReturn"`
}
