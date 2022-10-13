package shared

type ListOfOrders struct {
	Links  *PaginationLinks `json:"links"`
	Orders []OrderHeader    `json:"orders"`
}
