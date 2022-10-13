package shared

type ManagedZoneForwardingConfig struct {
	Kind              *string                                       `json:"kind"`
	TargetNameServers []ManagedZoneForwardingConfigNameServerTarget `json:"targetNameServers"`
}
