package shared

type GceClusterConfigPrivateIpv6GoogleAccessEnum string

const (
	GceClusterConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified GceClusterConfigPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
	GceClusterConfigPrivateIpv6GoogleAccessEnumInheritFromSubnetwork              GceClusterConfigPrivateIpv6GoogleAccessEnum = "INHERIT_FROM_SUBNETWORK"
	GceClusterConfigPrivateIpv6GoogleAccessEnumOutbound                           GceClusterConfigPrivateIpv6GoogleAccessEnum = "OUTBOUND"
	GceClusterConfigPrivateIpv6GoogleAccessEnumBidirectional                      GceClusterConfigPrivateIpv6GoogleAccessEnum = "BIDIRECTIONAL"
)

// GceClusterConfig
// Common config settings for resources of Compute Engine cluster instances, applicable to all instances in the cluster.
type GceClusterConfig struct {
	ConfidentialInstanceConfig *ConfidentialInstanceConfig                  `json:"confidentialInstanceConfig,omitempty"`
	InternalIPOnly             *bool                                        `json:"internalIpOnly,omitempty"`
	Metadata                   map[string]string                            `json:"metadata,omitempty"`
	NetworkURI                 *string                                      `json:"networkUri,omitempty"`
	NodeGroupAffinity          *NodeGroupAffinity                           `json:"nodeGroupAffinity,omitempty"`
	PrivateIpv6GoogleAccess    *GceClusterConfigPrivateIpv6GoogleAccessEnum `json:"privateIpv6GoogleAccess,omitempty"`
	ReservationAffinity        *ReservationAffinity                         `json:"reservationAffinity,omitempty"`
	ServiceAccount             *string                                      `json:"serviceAccount,omitempty"`
	ServiceAccountScopes       []string                                     `json:"serviceAccountScopes,omitempty"`
	ShieldedInstanceConfig     *ShieldedInstanceConfig                      `json:"shieldedInstanceConfig,omitempty"`
	SubnetworkURI              *string                                      `json:"subnetworkUri,omitempty"`
	Tags                       []string                                     `json:"tags,omitempty"`
	ZoneURI                    *string                                      `json:"zoneUri,omitempty"`
}
