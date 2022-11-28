package shared

// CidrBlock
// CidrBlock contains an optional name and one CIDR block.
type CidrBlock struct {
	CidrBlock   *string `json:"cidrBlock,omitempty"`
	DisplayName *string `json:"displayName,omitempty"`
}
