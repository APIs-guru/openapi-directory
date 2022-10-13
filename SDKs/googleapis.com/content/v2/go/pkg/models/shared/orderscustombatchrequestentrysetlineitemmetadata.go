package shared

type OrdersCustomBatchRequestEntrySetLineItemMetadata struct {
	Annotations []OrderMerchantProvidedAnnotation `json:"annotations"`
	LineItemID  *string                           `json:"lineItemId"`
	ProductID   *string                           `json:"productId"`
}
