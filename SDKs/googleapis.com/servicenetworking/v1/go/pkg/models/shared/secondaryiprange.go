package shared

type SecondaryIPRange struct {
	IPCidrRange *string `json:"ipCidrRange"`
	RangeName   *string `json:"rangeName"`
}
