package shared



type ProductDeliveryTimeAreaDeliveryTime struct {
    DeliveryArea *DeliveryArea `json:"deliveryArea,omitempty"`
    DeliveryTime *ProductDeliveryTimeAreaDeliveryTimeDeliveryTime `json:"deliveryTime,omitempty"`
    
}

