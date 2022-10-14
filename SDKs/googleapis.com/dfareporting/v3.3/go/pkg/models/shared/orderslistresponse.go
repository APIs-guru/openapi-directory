package shared

type OrdersListResponse struct {
	Kind          *string `json:"kind,omitempty"`
	NextPageToken *string `json:"nextPageToken,omitempty"`
	Orders        []Order `json:"orders,omitempty"`
}
