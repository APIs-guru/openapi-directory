package shared



type OrdersSetLineItemMetadataRequest struct {
    Annotations []OrderMerchantProvidedAnnotation `json:"annotations,omitempty"`
    LineItemID *string `json:"lineItemId,omitempty"`
    OperationID *string `json:"operationId,omitempty"`
    ProductID *string `json:"productId,omitempty"`
    
}

