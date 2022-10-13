package shared

type OrdersUpdateMerchantOrderIDRequest struct {
	MerchantOrderID *string `json:"merchantOrderId"`
	OperationID     *string `json:"operationId"`
}
