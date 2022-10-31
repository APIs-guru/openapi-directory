package shared

type ShipmentTrackingInfo struct {
	Carrier        *string `json:"carrier,omitempty"`
	TrackingNumber *string `json:"trackingNumber,omitempty"`
}
