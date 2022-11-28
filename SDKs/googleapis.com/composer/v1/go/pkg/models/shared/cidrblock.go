package shared

// CidrBlock
// CIDR block with an optional name.
type CidrBlock struct {
	CidrBlock   *string `json:"cidrBlock,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}
