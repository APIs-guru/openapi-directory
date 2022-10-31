package shared

type ForwardingRuleInfo struct {
	DisplayName      *string `json:"displayName,omitempty"`
	MatchedPortRange *string `json:"matchedPortRange,omitempty"`
	MatchedProtocol  *string `json:"matchedProtocol,omitempty"`
	NetworkURI       *string `json:"networkUri,omitempty"`
	Target           *string `json:"target,omitempty"`
	URI              *string `json:"uri,omitempty"`
	Vip              *string `json:"vip,omitempty"`
}
