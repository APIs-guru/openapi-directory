package shared

type ClusterCustomer struct {
	Address  *ClusterCustomerAddress `json:"address,omitempty"`
	ID       *string                 `json:"id,omitempty"`
	Quantity *float64                `json:"quantity,omitempty"`
}
