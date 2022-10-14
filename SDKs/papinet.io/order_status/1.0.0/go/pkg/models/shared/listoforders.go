package shared

type ListOfOrders struct {
	Links  *PaginationLinks `json:"links,omitempty"`
	Orders []OrderHeader    `json:"orders,omitempty"`
}
