package shared

type OrderTrackingSignal struct {
	CustomerShippingFee     *PriceAmount                                 `json:"customerShippingFee,omitempty"`
	DeliveryPostalCode      *string                                      `json:"deliveryPostalCode,omitempty"`
	DeliveryRegionCode      *string                                      `json:"deliveryRegionCode,omitempty"`
	LineItems               []OrderTrackingSignalLineItemDetails         `json:"lineItems,omitempty"`
	MerchantID              *string                                      `json:"merchantId,omitempty"`
	OrderCreatedTime        *DateTime                                    `json:"orderCreatedTime,omitempty"`
	OrderID                 *string                                      `json:"orderId,omitempty"`
	OrderTrackingSignalID   *string                                      `json:"orderTrackingSignalId,omitempty"`
	ShipmentLineItemMapping []OrderTrackingSignalShipmentLineItemMapping `json:"shipmentLineItemMapping,omitempty"`
	ShippingInfo            []OrderTrackingSignalShippingInfo            `json:"shippingInfo,omitempty"`
}
