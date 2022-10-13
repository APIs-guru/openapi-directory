package shared

type ShipmentTrackingInfo struct {
	Carrier        *string `json:"carrier"`
	TrackingNumber *string `json:"trackingNumber"`
}
