package shared

type ListInsertionOrdersResponse struct {
	InsertionOrders []InsertionOrder `json:"insertionOrders"`
	NextPageToken   *string          `json:"nextPageToken"`
}
