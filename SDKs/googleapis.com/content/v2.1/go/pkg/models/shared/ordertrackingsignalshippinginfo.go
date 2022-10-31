package shared

type OrderTrackingSignalShippingInfoShippingStatusEnum string

const (
	OrderTrackingSignalShippingInfoShippingStatusEnumShippingStateUnspecified OrderTrackingSignalShippingInfoShippingStatusEnum = "SHIPPING_STATE_UNSPECIFIED"
	OrderTrackingSignalShippingInfoShippingStatusEnumShipped                  OrderTrackingSignalShippingInfoShippingStatusEnum = "SHIPPED"
	OrderTrackingSignalShippingInfoShippingStatusEnumDelivered                OrderTrackingSignalShippingInfoShippingStatusEnum = "DELIVERED"
)

type OrderTrackingSignalShippingInfo struct {
	ActualDeliveryTime          *DateTime                                          `json:"actualDeliveryTime,omitempty"`
	CarrierName                 *string                                            `json:"carrierName,omitempty"`
	CarrierServiceName          *string                                            `json:"carrierServiceName,omitempty"`
	EarliestDeliveryPromiseTime *DateTime                                          `json:"earliestDeliveryPromiseTime,omitempty"`
	LatestDeliveryPromiseTime   *DateTime                                          `json:"latestDeliveryPromiseTime,omitempty"`
	OriginPostalCode            *string                                            `json:"originPostalCode,omitempty"`
	OriginRegionCode            *string                                            `json:"originRegionCode,omitempty"`
	ShipmentID                  *string                                            `json:"shipmentId,omitempty"`
	ShippedTime                 *DateTime                                          `json:"shippedTime,omitempty"`
	ShippingStatus              *OrderTrackingSignalShippingInfoShippingStatusEnum `json:"shippingStatus,omitempty"`
	TrackingID                  *string                                            `json:"trackingId,omitempty"`
}
