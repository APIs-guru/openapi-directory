package shared

type Promotion struct {
	PromotionAmount *Amount `json:"promotionAmount"`
	PromotionID     *string `json:"promotionId"`
}
