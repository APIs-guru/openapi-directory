package shared

type OrderPromotionItem struct {
	LineItemID *string `json:"lineItemId"`
	OfferID    *string `json:"offerId"`
	ProductID  *string `json:"productId"`
	Quantity   *int32  `json:"quantity"`
}
