package shared

type ReturnShippingLabel struct {
	Carrier    *string `json:"carrier,omitempty"`
	LabelURI   *string `json:"labelUri,omitempty"`
	TrackingID *string `json:"trackingId,omitempty"`
}
