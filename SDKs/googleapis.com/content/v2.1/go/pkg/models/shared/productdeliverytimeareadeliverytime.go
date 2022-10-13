package shared

type ProductDeliveryTimeAreaDeliveryTime struct {
	DeliveryArea *DeliveryArea                                    `json:"deliveryArea"`
	DeliveryTime *ProductDeliveryTimeAreaDeliveryTimeDeliveryTime `json:"deliveryTime"`
}
