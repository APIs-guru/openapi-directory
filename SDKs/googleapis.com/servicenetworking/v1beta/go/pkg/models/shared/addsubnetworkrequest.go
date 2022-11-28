package shared

// AddSubnetworkRequest
// Request to create a subnetwork in a previously peered service network.
type AddSubnetworkRequest struct {
	Consumer         *string  `json:"consumer,omitempty"`
	ConsumerNetwork  *string  `json:"consumerNetwork,omitempty"`
	Description      *string  `json:"description,omitempty"`
	IPPrefixLength   *int32   `json:"ipPrefixLength,omitempty"`
	Region           *string  `json:"region,omitempty"`
	RequestedAddress *string  `json:"requestedAddress,omitempty"`
	Subnetwork       *string  `json:"subnetwork,omitempty"`
	SubnetworkUsers  []string `json:"subnetworkUsers,omitempty"`
}
