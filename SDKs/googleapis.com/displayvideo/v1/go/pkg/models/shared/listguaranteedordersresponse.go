package shared

type ListGuaranteedOrdersResponse struct {
	GuaranteedOrders []GuaranteedOrder `json:"guaranteedOrders"`
	NextPageToken    *string           `json:"nextPageToken"`
}
