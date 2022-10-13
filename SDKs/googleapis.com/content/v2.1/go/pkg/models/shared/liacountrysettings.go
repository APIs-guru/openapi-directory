package shared

type LiaCountrySettings struct {
	About                       *LiaAboutPageSettings        `json:"about"`
	Country                     *string                      `json:"country"`
	HostedLocalStorefrontActive *bool                        `json:"hostedLocalStorefrontActive"`
	Inventory                   *LiaInventorySettings        `json:"inventory"`
	OnDisplayToOrder            *LiaOnDisplayToOrderSettings `json:"onDisplayToOrder"`
	PosDataProvider             *LiaPosDataProvider          `json:"posDataProvider"`
	StorePickupActive           *bool                        `json:"storePickupActive"`
}
