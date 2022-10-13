package shared

type NetworkConfigEgressOptionEnum string

const (
	NetworkConfigEgressOptionEnumEgressOptionUnspecified NetworkConfigEgressOptionEnum = "EGRESS_OPTION_UNSPECIFIED"
	NetworkConfigEgressOptionEnumNoPublicEgress          NetworkConfigEgressOptionEnum = "NO_PUBLIC_EGRESS"
	NetworkConfigEgressOptionEnumPublicEgress            NetworkConfigEgressOptionEnum = "PUBLIC_EGRESS"
)

type NetworkConfig struct {
	EgressOption  *NetworkConfigEgressOptionEnum `json:"egressOption"`
	PeeredNetwork *string                        `json:"peeredNetwork"`
}
