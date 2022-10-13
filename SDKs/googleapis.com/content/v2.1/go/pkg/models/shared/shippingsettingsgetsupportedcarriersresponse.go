package shared

type ShippingsettingsGetSupportedCarriersResponse struct {
	Carriers []CarriersCarrier `json:"carriers"`
	Kind     *string           `json:"kind"`
}
