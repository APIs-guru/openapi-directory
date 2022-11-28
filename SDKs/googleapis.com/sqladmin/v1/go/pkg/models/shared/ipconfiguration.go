package shared

// IPConfiguration
// IP Management configuration.
type IPConfiguration struct {
	AllocatedIPRange   *string    `json:"allocatedIpRange,omitempty"`
	AuthorizedNetworks []ACLEntry `json:"authorizedNetworks,omitempty"`
	Ipv4Enabled        *bool      `json:"ipv4Enabled,omitempty"`
	PrivateNetwork     *string    `json:"privateNetwork,omitempty"`
	RequireSsl         *bool      `json:"requireSsl,omitempty"`
}
