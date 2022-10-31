package shared

type ProductDeliveryTime struct {
	AreaDeliveryTimes []ProductDeliveryTimeAreaDeliveryTime `json:"areaDeliveryTimes,omitempty"`
	ProductID         *ProductID                            `json:"productId,omitempty"`
}
