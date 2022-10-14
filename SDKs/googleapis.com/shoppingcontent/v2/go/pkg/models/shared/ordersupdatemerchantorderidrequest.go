package shared

type OrdersUpdateMerchantOrderIDRequest struct {
	MerchantOrderID *string `json:"merchantOrderId,omitempty"`
	OperationID     *string `json:"operationId,omitempty"`
}
