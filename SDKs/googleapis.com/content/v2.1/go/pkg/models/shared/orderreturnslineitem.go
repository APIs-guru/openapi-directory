package shared

type OrderreturnsLineItem struct {
	LineItemID *string `json:"lineItemId"`
	ProductID  *string `json:"productId"`
	Quantity   *int64  `json:"quantity"`
}
