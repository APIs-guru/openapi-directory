package shared

type OrderreturnsCreateOrderReturnResponse struct {
	ExecutionStatus *string              `json:"executionStatus,omitempty"`
	Kind            *string              `json:"kind,omitempty"`
	OrderReturn     *MerchantOrderReturn `json:"orderReturn,omitempty"`
}
