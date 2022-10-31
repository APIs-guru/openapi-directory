package shared



type TestOrder struct {
    DeliveryDetails *TestOrderDeliveryDetails `json:"deliveryDetails,omitempty"`
    EnableOrderinvoices *bool `json:"enableOrderinvoices,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LineItems []TestOrderLineItem `json:"lineItems,omitempty"`
    NotificationMode *string `json:"notificationMode,omitempty"`
    PickupDetails *TestOrderPickupDetails `json:"pickupDetails,omitempty"`
    PredefinedBillingAddress *string `json:"predefinedBillingAddress,omitempty"`
    PredefinedDeliveryAddress *string `json:"predefinedDeliveryAddress,omitempty"`
    PredefinedEmail *string `json:"predefinedEmail,omitempty"`
    PredefinedPickupDetails *string `json:"predefinedPickupDetails,omitempty"`
    Promotions []OrderPromotion `json:"promotions,omitempty"`
    ShippingCost *Price `json:"shippingCost,omitempty"`
    ShippingOption *string `json:"shippingOption,omitempty"`
    
}

