package shared

type ClusterRequest struct {
	Configuration *ClusterConfiguration `json:"configuration"`
	Customers     []ClusterCustomer     `json:"customers"`
}
