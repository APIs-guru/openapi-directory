package shared



type OrdersCustomBatchRequestEntrySetLineItemMetadata struct {
    Annotations []OrderMerchantProvidedAnnotation `json:"annotations,omitempty"`
    LineItemID *string `json:"lineItemId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

