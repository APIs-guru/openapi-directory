package shared

type ShippingMethodEditShippingMethod struct {
	CallbackURL      *string `json:"callback_url"`
	City             *string `json:"city"`
	FetchServicesURL *string `json:"fetch_services_url"`
	Name             *string `json:"name"`
	Postal           *string `json:"postal"`
	State            *string `json:"state"`
	Token            *string `json:"token"`
}

type ShippingMethodEdit struct {
	ShippingMethod *ShippingMethodEditShippingMethod `json:"shipping_method"`
}
