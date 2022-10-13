package shared

type ProductDeliveryTime struct {
	AreaDeliveryTimes []ProductDeliveryTimeAreaDeliveryTime `json:"areaDeliveryTimes"`
	ProductID         *ProductID                            `json:"productId"`
}
