package shared

type CarriersCarrier struct {
	Country     *string  `json:"country"`
	EddServices []string `json:"eddServices"`
	Name        *string  `json:"name"`
	Services    []string `json:"services"`
}
