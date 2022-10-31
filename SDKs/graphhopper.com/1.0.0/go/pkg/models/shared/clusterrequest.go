package shared



type ClusterRequest struct {
    Configuration *ClusterConfiguration `json:"configuration,omitempty"`
    Customers []ClusterCustomer `json:"customers,omitempty"`
    
}

