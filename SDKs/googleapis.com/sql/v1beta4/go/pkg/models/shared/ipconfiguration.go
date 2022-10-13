package shared

type IPConfiguration struct {
	AllocatedIPRange   *string    `json:"allocatedIpRange"`
	AuthorizedNetworks []ACLEntry `json:"authorizedNetworks"`
	Ipv4Enabled        *bool      `json:"ipv4Enabled"`
	PrivateNetwork     *string    `json:"privateNetwork"`
	RequireSsl         *bool      `json:"requireSsl"`
}
