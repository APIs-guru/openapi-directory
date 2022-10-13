package shared

type ClusterCustomer struct {
	Address  *ClusterCustomerAddress `json:"address"`
	ID       *string                 `json:"id"`
	Quantity *float64                `json:"quantity"`
}
