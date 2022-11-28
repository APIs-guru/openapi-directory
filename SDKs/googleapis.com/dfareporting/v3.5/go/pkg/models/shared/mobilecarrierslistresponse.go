package shared

// MobileCarriersListResponse
// Mobile Carrier List Response
type MobileCarriersListResponse struct {
	Kind           *string         `json:"kind,omitempty"`
	MobileCarriers []MobileCarrier `json:"mobileCarriers,omitempty"`
}
