package shared

type TestOrder struct {
	Customer                  *TestOrderCustomer      `json:"customer,omitempty"`
	EnableOrderinvoices       *bool                   `json:"enableOrderinvoices,omitempty"`
	Kind                      *string                 `json:"kind,omitempty"`
	LineItems                 []TestOrderLineItem     `json:"lineItems,omitempty"`
	NotificationMode          *string                 `json:"notificationMode,omitempty"`
	PaymentMethod             *TestOrderPaymentMethod `json:"paymentMethod,omitempty"`
	PredefinedDeliveryAddress *string                 `json:"predefinedDeliveryAddress,omitempty"`
	PredefinedPickupDetails   *string                 `json:"predefinedPickupDetails,omitempty"`
	Promotions                []OrderLegacyPromotion  `json:"promotions,omitempty"`
	ShippingCost              *Price                  `json:"shippingCost,omitempty"`
	ShippingCostTax           *Price                  `json:"shippingCostTax,omitempty"`
	ShippingOption            *string                 `json:"shippingOption,omitempty"`
}
