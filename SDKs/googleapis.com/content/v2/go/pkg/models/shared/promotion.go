package shared



type Promotion struct {
    PromotionAmount *Amount `json:"promotionAmount,omitempty"`
    PromotionID *string `json:"promotionId,omitempty"`
    
}

