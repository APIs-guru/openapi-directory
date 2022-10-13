package shared

type TestOrder struct {
	Customer                  *TestOrderCustomer      `json:"customer"`
	EnableOrderinvoices       *bool                   `json:"enableOrderinvoices"`
	Kind                      *string                 `json:"kind"`
	LineItems                 []TestOrderLineItem     `json:"lineItems"`
	NotificationMode          *string                 `json:"notificationMode"`
	PaymentMethod             *TestOrderPaymentMethod `json:"paymentMethod"`
	PredefinedDeliveryAddress *string                 `json:"predefinedDeliveryAddress"`
	PredefinedPickupDetails   *string                 `json:"predefinedPickupDetails"`
	Promotions                []OrderLegacyPromotion  `json:"promotions"`
	ShippingCost              *Price                  `json:"shippingCost"`
	ShippingCostTax           *Price                  `json:"shippingCostTax"`
	ShippingOption            *string                 `json:"shippingOption"`
}
