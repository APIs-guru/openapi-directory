package shared

type ForwardingRuleInfo struct {
	DisplayName      *string `json:"displayName"`
	MatchedPortRange *string `json:"matchedPortRange"`
	MatchedProtocol  *string `json:"matchedProtocol"`
	NetworkURI       *string `json:"networkUri"`
	Target           *string `json:"target"`
	URI              *string `json:"uri"`
	Vip              *string `json:"vip"`
}
