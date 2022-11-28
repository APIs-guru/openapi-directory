package shared

// PingConfig
// Information involved in sending ICMP pings alongside public HTTP/TCP checks. For HTTP, the pings are performed for each part of the redirect chain.
type PingConfig struct {
	PingsCount *int32 `json:"pingsCount,omitempty"`
}
