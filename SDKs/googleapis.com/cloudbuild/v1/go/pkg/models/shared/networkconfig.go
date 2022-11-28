package shared

type NetworkConfigEgressOptionEnum string

const (
	NetworkConfigEgressOptionEnumEgressOptionUnspecified NetworkConfigEgressOptionEnum = "EGRESS_OPTION_UNSPECIFIED"
	NetworkConfigEgressOptionEnumNoPublicEgress          NetworkConfigEgressOptionEnum = "NO_PUBLIC_EGRESS"
	NetworkConfigEgressOptionEnumPublicEgress            NetworkConfigEgressOptionEnum = "PUBLIC_EGRESS"
)

// NetworkConfig
// Defines the network configuration for the pool.
type NetworkConfig struct {
	EgressOption  *NetworkConfigEgressOptionEnum `json:"egressOption,omitempty"`
	PeeredNetwork *string                        `json:"peeredNetwork,omitempty"`
}
