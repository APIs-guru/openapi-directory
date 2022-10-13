package shared

type OrderTrackingSignal struct {
	CustomerShippingFee     *PriceAmount                                 `json:"customerShippingFee"`
	DeliveryPostalCode      *string                                      `json:"deliveryPostalCode"`
	DeliveryRegionCode      *string                                      `json:"deliveryRegionCode"`
	LineItems               []OrderTrackingSignalLineItemDetails         `json:"lineItems"`
	MerchantID              *string                                      `json:"merchantId"`
	OrderCreatedTime        *DateTime                                    `json:"orderCreatedTime"`
	OrderID                 *string                                      `json:"orderId"`
	OrderTrackingSignalID   *string                                      `json:"orderTrackingSignalId"`
	ShipmentLineItemMapping []OrderTrackingSignalShipmentLineItemMapping `json:"shipmentLineItemMapping"`
	ShippingInfo            []OrderTrackingSignalShippingInfo            `json:"shippingInfo"`
}
