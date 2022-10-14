package shared

type OrderPromotionItem struct {
	LineItemID *string `json:"lineItemId,omitempty"`
	OfferID    *string `json:"offerId,omitempty"`
	ProductID  *string `json:"productId,omitempty"`
	Quantity   *int32  `json:"quantity,omitempty"`
}
