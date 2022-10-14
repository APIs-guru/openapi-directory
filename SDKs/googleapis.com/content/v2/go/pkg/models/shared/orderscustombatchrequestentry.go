package shared

type OrdersCustomBatchRequestEntry struct {
	BatchID                       *int64                                                      `json:"batchId,omitempty"`
	Cancel                        *OrdersCustomBatchRequestEntryCancel                        `json:"cancel,omitempty"`
	CancelLineItem                *OrdersCustomBatchRequestEntryCancelLineItem                `json:"cancelLineItem,omitempty"`
	InStoreRefundLineItem         *OrdersCustomBatchRequestEntryInStoreRefundLineItem         `json:"inStoreRefundLineItem,omitempty"`
	MerchantID                    *string                                                     `json:"merchantId,omitempty"`
	MerchantOrderID               *string                                                     `json:"merchantOrderId,omitempty"`
	Method                        *string                                                     `json:"method,omitempty"`
	OperationID                   *string                                                     `json:"operationId,omitempty"`
	OrderID                       *string                                                     `json:"orderId,omitempty"`
	Refund                        *OrdersCustomBatchRequestEntryRefund                        `json:"refund,omitempty"`
	RejectReturnLineItem          *OrdersCustomBatchRequestEntryRejectReturnLineItem          `json:"rejectReturnLineItem,omitempty"`
	ReturnLineItem                *OrdersCustomBatchRequestEntryReturnLineItem                `json:"returnLineItem,omitempty"`
	ReturnRefundLineItem          *OrdersCustomBatchRequestEntryReturnRefundLineItem          `json:"returnRefundLineItem,omitempty"`
	SetLineItemMetadata           *OrdersCustomBatchRequestEntrySetLineItemMetadata           `json:"setLineItemMetadata,omitempty"`
	ShipLineItems                 *OrdersCustomBatchRequestEntryShipLineItems                 `json:"shipLineItems,omitempty"`
	UpdateLineItemShippingDetails *OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails `json:"updateLineItemShippingDetails,omitempty"`
	UpdateShipment                *OrdersCustomBatchRequestEntryUpdateShipment                `json:"updateShipment,omitempty"`
}
