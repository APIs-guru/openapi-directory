package shared

type OrdersCustomBatchRequestEntry struct {
	BatchID                       *int64                                                      `json:"batchId"`
	Cancel                        *OrdersCustomBatchRequestEntryCancel                        `json:"cancel"`
	CancelLineItem                *OrdersCustomBatchRequestEntryCancelLineItem                `json:"cancelLineItem"`
	InStoreRefundLineItem         *OrdersCustomBatchRequestEntryInStoreRefundLineItem         `json:"inStoreRefundLineItem"`
	MerchantID                    *string                                                     `json:"merchantId"`
	MerchantOrderID               *string                                                     `json:"merchantOrderId"`
	Method                        *string                                                     `json:"method"`
	OperationID                   *string                                                     `json:"operationId"`
	OrderID                       *string                                                     `json:"orderId"`
	Refund                        *OrdersCustomBatchRequestEntryRefund                        `json:"refund"`
	RejectReturnLineItem          *OrdersCustomBatchRequestEntryRejectReturnLineItem          `json:"rejectReturnLineItem"`
	ReturnLineItem                *OrdersCustomBatchRequestEntryReturnLineItem                `json:"returnLineItem"`
	ReturnRefundLineItem          *OrdersCustomBatchRequestEntryReturnRefundLineItem          `json:"returnRefundLineItem"`
	SetLineItemMetadata           *OrdersCustomBatchRequestEntrySetLineItemMetadata           `json:"setLineItemMetadata"`
	ShipLineItems                 *OrdersCustomBatchRequestEntryShipLineItems                 `json:"shipLineItems"`
	UpdateLineItemShippingDetails *OrdersCustomBatchRequestEntryUpdateLineItemShippingDetails `json:"updateLineItemShippingDetails"`
	UpdateShipment                *OrdersCustomBatchRequestEntryUpdateShipment                `json:"updateShipment"`
}
