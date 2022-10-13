package shared

type MobileCarriersListResponse struct {
	Kind           *string         `json:"kind"`
	MobileCarriers []MobileCarrier `json:"mobileCarriers"`
}
