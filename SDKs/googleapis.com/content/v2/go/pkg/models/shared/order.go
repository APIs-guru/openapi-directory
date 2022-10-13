package shared

type Order struct {
	Acknowledged    *bool                  `json:"acknowledged"`
	ChannelType     *string                `json:"channelType"`
	Customer        *OrderCustomer         `json:"customer"`
	DeliveryDetails *OrderDeliveryDetails  `json:"deliveryDetails"`
	ID              *string                `json:"id"`
	Kind            *string                `json:"kind"`
	LineItems       []OrderLineItem        `json:"lineItems"`
	MerchantID      *string                `json:"merchantId"`
	MerchantOrderID *string                `json:"merchantOrderId"`
	NetAmount       *Price                 `json:"netAmount"`
	PaymentMethod   *OrderPaymentMethod    `json:"paymentMethod"`
	PaymentStatus   *string                `json:"paymentStatus"`
	PickupDetails   *OrderPickupDetails    `json:"pickupDetails"`
	PlacedDate      *string                `json:"placedDate"`
	Promotions      []OrderLegacyPromotion `json:"promotions"`
	Refunds         []OrderRefund          `json:"refunds"`
	Shipments       []OrderShipment        `json:"shipments"`
	ShippingCost    *Price                 `json:"shippingCost"`
	ShippingCostTax *Price                 `json:"shippingCostTax"`
	ShippingOption  *string                `json:"shippingOption"`
	Status          *string                `json:"status"`
	TaxCollector    *string                `json:"taxCollector"`
}
