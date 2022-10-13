package shared

type OrderTrackingSignalShippingInfoShippingStatusEnum string

const (
	OrderTrackingSignalShippingInfoShippingStatusEnumShippingStateUnspecified OrderTrackingSignalShippingInfoShippingStatusEnum = "SHIPPING_STATE_UNSPECIFIED"
	OrderTrackingSignalShippingInfoShippingStatusEnumShipped                  OrderTrackingSignalShippingInfoShippingStatusEnum = "SHIPPED"
	OrderTrackingSignalShippingInfoShippingStatusEnumDelivered                OrderTrackingSignalShippingInfoShippingStatusEnum = "DELIVERED"
)

type OrderTrackingSignalShippingInfo struct {
	ActualDeliveryTime          *DateTime                                          `json:"actualDeliveryTime"`
	CarrierName                 *string                                            `json:"carrierName"`
	CarrierServiceName          *string                                            `json:"carrierServiceName"`
	EarliestDeliveryPromiseTime *DateTime                                          `json:"earliestDeliveryPromiseTime"`
	LatestDeliveryPromiseTime   *DateTime                                          `json:"latestDeliveryPromiseTime"`
	OriginPostalCode            *string                                            `json:"originPostalCode"`
	OriginRegionCode            *string                                            `json:"originRegionCode"`
	ShipmentID                  *string                                            `json:"shipmentId"`
	ShippedTime                 *DateTime                                          `json:"shippedTime"`
	ShippingStatus              *OrderTrackingSignalShippingInfoShippingStatusEnum `json:"shippingStatus"`
	TrackingID                  *string                                            `json:"trackingId"`
}
