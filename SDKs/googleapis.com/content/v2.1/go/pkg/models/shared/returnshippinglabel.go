package shared

// ReturnShippingLabel
// Return shipping label for a Buy on Google merchant-managed return.
type ReturnShippingLabel struct {
	Carrier    *string `json:"carrier,omitempty"`
	LabelURI   *string `json:"labelUri,omitempty"`
	TrackingID *string `json:"trackingId,omitempty"`
}
