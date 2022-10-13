package shared

type GceClusterConfigPrivateIpv6GoogleAccessEnum string

const (
	GceClusterConfigPrivateIpv6GoogleAccessEnumPrivateIpv6GoogleAccessUnspecified GceClusterConfigPrivateIpv6GoogleAccessEnum = "PRIVATE_IPV6_GOOGLE_ACCESS_UNSPECIFIED"
	GceClusterConfigPrivateIpv6GoogleAccessEnumInheritFromSubnetwork              GceClusterConfigPrivateIpv6GoogleAccessEnum = "INHERIT_FROM_SUBNETWORK"
	GceClusterConfigPrivateIpv6GoogleAccessEnumOutbound                           GceClusterConfigPrivateIpv6GoogleAccessEnum = "OUTBOUND"
	GceClusterConfigPrivateIpv6GoogleAccessEnumBidirectional                      GceClusterConfigPrivateIpv6GoogleAccessEnum = "BIDIRECTIONAL"
)

type GceClusterConfig struct {
	ConfidentialInstanceConfig *ConfidentialInstanceConfig                  `json:"confidentialInstanceConfig"`
	InternalIPOnly             *bool                                        `json:"internalIpOnly"`
	Metadata                   map[string]string                            `json:"metadata"`
	NetworkURI                 *string                                      `json:"networkUri"`
	NodeGroupAffinity          *NodeGroupAffinity                           `json:"nodeGroupAffinity"`
	PrivateIpv6GoogleAccess    *GceClusterConfigPrivateIpv6GoogleAccessEnum `json:"privateIpv6GoogleAccess"`
	ReservationAffinity        *ReservationAffinity                         `json:"reservationAffinity"`
	ServiceAccount             *string                                      `json:"serviceAccount"`
	ServiceAccountScopes       []string                                     `json:"serviceAccountScopes"`
	ShieldedInstanceConfig     *ShieldedInstanceConfig                      `json:"shieldedInstanceConfig"`
	SubnetworkURI              *string                                      `json:"subnetworkUri"`
	Tags                       []string                                     `json:"tags"`
	ZoneURI                    *string                                      `json:"zoneUri"`
}
