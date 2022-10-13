package shared

type ReturnShippingLabel struct {
	Carrier    *string `json:"carrier"`
	LabelURI   *string `json:"labelUri"`
	TrackingID *string `json:"trackingId"`
}
