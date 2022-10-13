package shared

type AddSubnetworkRequest struct {
	Consumer         *string  `json:"consumer"`
	ConsumerNetwork  *string  `json:"consumerNetwork"`
	Description      *string  `json:"description"`
	IPPrefixLength   *int32   `json:"ipPrefixLength"`
	Region           *string  `json:"region"`
	RequestedAddress *string  `json:"requestedAddress"`
	Subnetwork       *string  `json:"subnetwork"`
	SubnetworkUsers  []string `json:"subnetworkUsers"`
}
