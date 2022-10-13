package shared

type ProductDeliveryTimeAreaDeliveryTimeDeliveryTime struct {
	MaxHandlingTimeDays *int32 `json:"maxHandlingTimeDays"`
	MaxTransitTimeDays  *int32 `json:"maxTransitTimeDays"`
	MinHandlingTimeDays *int32 `json:"minHandlingTimeDays"`
	MinTransitTimeDays  *int32 `json:"minTransitTimeDays"`
}
