package shared

// ProductDeliveryTimeAreaDeliveryTimeDeliveryTime
// A delivery time for this product.
type ProductDeliveryTimeAreaDeliveryTimeDeliveryTime struct {
	MaxHandlingTimeDays *int32 `json:"maxHandlingTimeDays,omitempty"`
	MaxTransitTimeDays  *int32 `json:"maxTransitTimeDays,omitempty"`
	MinHandlingTimeDays *int32 `json:"minHandlingTimeDays,omitempty"`
	MinTransitTimeDays  *int32 `json:"minTransitTimeDays,omitempty"`
}
