package shared

type PolicyAlternativeNameServerConfig struct {
	Kind              *string                                             `json:"kind"`
	TargetNameServers []PolicyAlternativeNameServerConfigTargetNameServer `json:"targetNameServers"`
}
