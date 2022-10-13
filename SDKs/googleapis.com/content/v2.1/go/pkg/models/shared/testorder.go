package shared

type TestOrder struct {
	DeliveryDetails           *TestOrderDeliveryDetails `json:"deliveryDetails"`
	EnableOrderinvoices       *bool                     `json:"enableOrderinvoices"`
	Kind                      *string                   `json:"kind"`
	LineItems                 []TestOrderLineItem       `json:"lineItems"`
	NotificationMode          *string                   `json:"notificationMode"`
	PickupDetails             *TestOrderPickupDetails   `json:"pickupDetails"`
	PredefinedBillingAddress  *string                   `json:"predefinedBillingAddress"`
	PredefinedDeliveryAddress *string                   `json:"predefinedDeliveryAddress"`
	PredefinedEmail           *string                   `json:"predefinedEmail"`
	PredefinedPickupDetails   *string                   `json:"predefinedPickupDetails"`
	Promotions                []OrderPromotion          `json:"promotions"`
	ShippingCost              *Price                    `json:"shippingCost"`
	ShippingOption            *string                   `json:"shippingOption"`
}
