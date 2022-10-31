package shared

type ListGuaranteedOrdersResponse struct {
	GuaranteedOrders []GuaranteedOrder `json:"guaranteedOrders,omitempty"`
	NextPageToken    *string           `json:"nextPageToken,omitempty"`
}
