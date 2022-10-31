package shared



type ShippingMethodEditShippingMethod struct {
    CallbackURL *string `json:"callback_url,omitempty"`
    City *string `json:"city,omitempty"`
    FetchServicesURL *string `json:"fetch_services_url,omitempty"`
    Name *string `json:"name,omitempty"`
    Postal *string `json:"postal,omitempty"`
    State *string `json:"state,omitempty"`
    Token *string `json:"token,omitempty"`
    
}

type ShippingMethodEdit struct {
    ShippingMethod *ShippingMethodEditShippingMethod `json:"shipping_method,omitempty"`
    
}

