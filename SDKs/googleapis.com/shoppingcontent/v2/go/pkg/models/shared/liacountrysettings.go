package shared

type LiaCountrySettings struct {
	About                       *LiaAboutPageSettings        `json:"about,omitempty"`
	Country                     *string                      `json:"country,omitempty"`
	HostedLocalStorefrontActive *bool                        `json:"hostedLocalStorefrontActive,omitempty"`
	Inventory                   *LiaInventorySettings        `json:"inventory,omitempty"`
	OnDisplayToOrder            *LiaOnDisplayToOrderSettings `json:"onDisplayToOrder,omitempty"`
	PosDataProvider             *LiaPosDataProvider          `json:"posDataProvider,omitempty"`
	StorePickupActive           *bool                        `json:"storePickupActive,omitempty"`
}
