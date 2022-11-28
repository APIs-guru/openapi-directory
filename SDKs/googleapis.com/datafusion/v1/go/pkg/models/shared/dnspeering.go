package shared

// DNSPeering
// DNS peering configuration. These configurations are used to create DNS peering with the customer Cloud DNS.
type DNSPeering struct {
	Description   *string `json:"description,omitempty"`
	Domain        *string `json:"domain,omitempty"`
	Name          *string `json:"name,omitempty"`
	TargetNetwork *string `json:"targetNetwork,omitempty"`
	TargetProject *string `json:"targetProject,omitempty"`
}
