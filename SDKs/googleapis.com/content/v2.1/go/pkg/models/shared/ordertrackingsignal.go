package shared

// OrderTrackingSignal
// Represents a merchant trade from which signals are extracted, e.g. shipping.
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

// OrderTrackingSignalInput
// Represents a merchant trade from which signals are extracted, e.g. shipping.
type OrderTrackingSignalInput struct {
	CustomerShippingFee     *PriceAmount                                 `json:"customerShippingFee,omitempty"`
	DeliveryPostalCode      *string                                      `json:"deliveryPostalCode,omitempty"`
	DeliveryRegionCode      *string                                      `json:"deliveryRegionCode,omitempty"`
	LineItems               []OrderTrackingSignalLineItemDetails         `json:"lineItems,omitempty"`
	MerchantID              *string                                      `json:"merchantId,omitempty"`
	OrderCreatedTime        *DateTime                                    `json:"orderCreatedTime,omitempty"`
	OrderID                 *string                                      `json:"orderId,omitempty"`
	ShipmentLineItemMapping []OrderTrackingSignalShipmentLineItemMapping `json:"shipmentLineItemMapping,omitempty"`
	ShippingInfo            []OrderTrackingSignalShippingInfo            `json:"shippingInfo,omitempty"`
}
