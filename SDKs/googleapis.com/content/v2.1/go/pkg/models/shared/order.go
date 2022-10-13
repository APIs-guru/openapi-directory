package shared

type Order struct {
	Acknowledged    *bool                  `json:"acknowledged"`
	Annotations     []OrderOrderAnnotation `json:"annotations"`
	BillingAddress  *OrderAddress          `json:"billingAddress"`
	Customer        *OrderCustomer         `json:"customer"`
	DeliveryDetails *OrderDeliveryDetails  `json:"deliveryDetails"`
	ID              *string                `json:"id"`
	Kind            *string                `json:"kind"`
	LineItems       []OrderLineItem        `json:"lineItems"`
	MerchantID      *string                `json:"merchantId"`
	MerchantOrderID *string                `json:"merchantOrderId"`
	NetPriceAmount  *Price                 `json:"netPriceAmount"`
	NetTaxAmount    *Price                 `json:"netTaxAmount"`
	PaymentStatus   *string                `json:"paymentStatus"`
	PickupDetails   *OrderPickupDetails    `json:"pickupDetails"`
	PlacedDate      *string                `json:"placedDate"`
	Promotions      []OrderPromotion       `json:"promotions"`
	Refunds         []OrderRefund          `json:"refunds"`
	Shipments       []OrderShipment        `json:"shipments"`
	ShippingCost    *Price                 `json:"shippingCost"`
	ShippingCostTax *Price                 `json:"shippingCostTax"`
	Status          *string                `json:"status"`
	TaxCollector    *string                `json:"taxCollector"`
}
