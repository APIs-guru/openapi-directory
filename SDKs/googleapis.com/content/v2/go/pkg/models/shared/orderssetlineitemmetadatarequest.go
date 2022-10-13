package shared

type OrdersSetLineItemMetadataRequest struct {
	Annotations []OrderMerchantProvidedAnnotation `json:"annotations"`
	LineItemID  *string                           `json:"lineItemId"`
	OperationID *string                           `json:"operationId"`
	ProductID   *string                           `json:"productId"`
}
