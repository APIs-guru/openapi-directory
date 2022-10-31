package shared



type Order struct {
    Acknowledged *bool `json:"acknowledged,omitempty"`
    Annotations []OrderOrderAnnotation `json:"annotations,omitempty"`
    BillingAddress *OrderAddress `json:"billingAddress,omitempty"`
    Customer *OrderCustomer `json:"customer,omitempty"`
    DeliveryDetails *OrderDeliveryDetails `json:"deliveryDetails,omitempty"`
    ID *string `json:"id,omitempty"`
    Kind *string `json:"kind,omitempty"`
    LineItems []OrderLineItem `json:"lineItems,omitempty"`
    MerchantID *string `json:"merchantId,omitempty"`
    MerchantOrderID *string `json:"merchantOrderId,omitempty"`
    NetPriceAmount *Price `json:"netPriceAmount,omitempty"`
    NetTaxAmount *Price `json:"netTaxAmount,omitempty"`
    PaymentStatus *string `json:"paymentStatus,omitempty"`
    PickupDetails *OrderPickupDetails `json:"pickupDetails,omitempty"`
    PlacedDate *string `json:"placedDate,omitempty"`
    Promotions []OrderPromotion `json:"promotions,omitempty"`
    Refunds []OrderRefund `json:"refunds,omitempty"`
    Shipments []OrderShipment `json:"shipments,omitempty"`
    ShippingCost *Price `json:"shippingCost,omitempty"`
    ShippingCostTax *Price `json:"shippingCostTax,omitempty"`
    Status *string `json:"status,omitempty"`
    TaxCollector *string `json:"taxCollector,omitempty"`
    
}

