package shared

// MasterAuthorizedNetworksConfig
// Configuration options for the master authorized networks feature. Enabled master authorized networks will disallow all external traffic to access Kubernetes master through HTTPS except traffic from the given CIDR blocks, Google Compute Engine Public IPs and Google Prod IPs.
type MasterAuthorizedNetworksConfig struct {
	CidrBlocks                  []CidrBlock `json:"cidrBlocks,omitempty"`
	Enabled                     *bool       `json:"enabled,omitempty"`
	GcpPublicCidrsAccessEnabled *bool       `json:"gcpPublicCidrsAccessEnabled,omitempty"`
}
