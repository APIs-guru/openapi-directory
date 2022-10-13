package shared

type Quota struct {
	DNSKeysPerManagedZone                *int32       `json:"dnsKeysPerManagedZone"`
	GkeClustersPerManagedZone            *int32       `json:"gkeClustersPerManagedZone"`
	GkeClustersPerPolicy                 *int32       `json:"gkeClustersPerPolicy"`
	GkeClustersPerResponsePolicy         *int32       `json:"gkeClustersPerResponsePolicy"`
	ItemsPerRoutingPolicy                *int32       `json:"itemsPerRoutingPolicy"`
	Kind                                 *string      `json:"kind"`
	ManagedZones                         *int32       `json:"managedZones"`
	ManagedZonesPerGkeCluster            *int32       `json:"managedZonesPerGkeCluster"`
	ManagedZonesPerNetwork               *int32       `json:"managedZonesPerNetwork"`
	NetworksPerManagedZone               *int32       `json:"networksPerManagedZone"`
	NetworksPerPolicy                    *int32       `json:"networksPerPolicy"`
	NetworksPerResponsePolicy            *int32       `json:"networksPerResponsePolicy"`
	PeeringZonesPerTargetNetwork         *int32       `json:"peeringZonesPerTargetNetwork"`
	Policies                             *int32       `json:"policies"`
	ResourceRecordsPerRrset              *int32       `json:"resourceRecordsPerRrset"`
	ResponsePolicies                     *int32       `json:"responsePolicies"`
	ResponsePolicyRulesPerResponsePolicy *int32       `json:"responsePolicyRulesPerResponsePolicy"`
	RrsetAdditionsPerChange              *int32       `json:"rrsetAdditionsPerChange"`
	RrsetDeletionsPerChange              *int32       `json:"rrsetDeletionsPerChange"`
	RrsetsPerManagedZone                 *int32       `json:"rrsetsPerManagedZone"`
	TargetNameServersPerManagedZone      *int32       `json:"targetNameServersPerManagedZone"`
	TargetNameServersPerPolicy           *int32       `json:"targetNameServersPerPolicy"`
	TotalRrdataSizePerChange             *int32       `json:"totalRrdataSizePerChange"`
	WhitelistedKeySpecs                  []DNSKeySpec `json:"whitelistedKeySpecs"`
}
