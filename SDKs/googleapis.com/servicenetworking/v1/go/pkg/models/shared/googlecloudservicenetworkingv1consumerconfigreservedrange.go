package shared

// GoogleCloudServicenetworkingV1ConsumerConfigReservedRange
// Allocated IP address ranges for this private service access connection.
type GoogleCloudServicenetworkingV1ConsumerConfigReservedRange struct {
	Address        *string `json:"address,omitempty"`
	IPPrefixLength *int32  `json:"ipPrefixLength,omitempty"`
	Name           *string `json:"name,omitempty"`
}
