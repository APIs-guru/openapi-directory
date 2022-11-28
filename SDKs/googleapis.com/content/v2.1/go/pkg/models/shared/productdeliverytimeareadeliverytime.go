package shared

// ProductDeliveryTimeAreaDeliveryTime
// A pairing of `DeliveryArea` associated with a `DeliveryTime` for this product.
type ProductDeliveryTimeAreaDeliveryTime struct {
	DeliveryArea *DeliveryArea                                    `json:"deliveryArea,omitempty"`
	DeliveryTime *ProductDeliveryTimeAreaDeliveryTimeDeliveryTime `json:"deliveryTime,omitempty"`
}
