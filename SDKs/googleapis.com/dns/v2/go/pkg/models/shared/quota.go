package shared

// Quota
// Limits associated with a Project.
type Quota struct {
	DNSKeysPerManagedZone                *int32       `json:"dnsKeysPerManagedZone,omitempty"`
	GkeClustersPerManagedZone            *int32       `json:"gkeClustersPerManagedZone,omitempty"`
	GkeClustersPerPolicy                 *int32       `json:"gkeClustersPerPolicy,omitempty"`
	GkeClustersPerResponsePolicy         *int32       `json:"gkeClustersPerResponsePolicy,omitempty"`
	ItemsPerRoutingPolicy                *int32       `json:"itemsPerRoutingPolicy,omitempty"`
	Kind                                 *string      `json:"kind,omitempty"`
	ManagedZones                         *int32       `json:"managedZones,omitempty"`
	ManagedZonesPerGkeCluster            *int32       `json:"managedZonesPerGkeCluster,omitempty"`
	ManagedZonesPerNetwork               *int32       `json:"managedZonesPerNetwork,omitempty"`
	NetworksPerManagedZone               *int32       `json:"networksPerManagedZone,omitempty"`
	NetworksPerPolicy                    *int32       `json:"networksPerPolicy,omitempty"`
	NetworksPerResponsePolicy            *int32       `json:"networksPerResponsePolicy,omitempty"`
	PeeringZonesPerTargetNetwork         *int32       `json:"peeringZonesPerTargetNetwork,omitempty"`
	Policies                             *int32       `json:"policies,omitempty"`
	ResourceRecordsPerRrset              *int32       `json:"resourceRecordsPerRrset,omitempty"`
	ResponsePolicies                     *int32       `json:"responsePolicies,omitempty"`
	ResponsePolicyRulesPerResponsePolicy *int32       `json:"responsePolicyRulesPerResponsePolicy,omitempty"`
	RrsetAdditionsPerChange              *int32       `json:"rrsetAdditionsPerChange,omitempty"`
	RrsetDeletionsPerChange              *int32       `json:"rrsetDeletionsPerChange,omitempty"`
	RrsetsPerManagedZone                 *int32       `json:"rrsetsPerManagedZone,omitempty"`
	TargetNameServersPerManagedZone      *int32       `json:"targetNameServersPerManagedZone,omitempty"`
	TargetNameServersPerPolicy           *int32       `json:"targetNameServersPerPolicy,omitempty"`
	TotalRrdataSizePerChange             *int32       `json:"totalRrdataSizePerChange,omitempty"`
	WhitelistedKeySpecs                  []DNSKeySpec `json:"whitelistedKeySpecs,omitempty"`
}
