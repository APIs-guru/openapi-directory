package shared

// Peer
// This message defines attributes for a node that handles a network request. The node can be either a service or an application that sends, forwards, or receives the request. Service peers should fill in `principal` and `labels` as appropriate.
type Peer struct {
	IP         *string           `json:"ip,omitempty"`
	Labels     map[string]string `json:"labels,omitempty"`
	Port       *string           `json:"port,omitempty"`
	Principal  *string           `json:"principal,omitempty"`
	RegionCode *string           `json:"regionCode,omitempty"`
}
