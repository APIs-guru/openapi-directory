package shared

// GlueRecord
// Defines a host on your domain that is a DNS name server for your domain and/or other domains. Glue records are a way of making the IP address of a name server known, even when it serves DNS queries for its parent domain. For example, when `ns.example.com` is a name server for `example.com`, the host `ns.example.com` must have a glue record to break the circular DNS reference.
type GlueRecord struct {
	HostName      *string  `json:"hostName,omitempty"`
	Ipv4Addresses []string `json:"ipv4Addresses,omitempty"`
	Ipv6Addresses []string `json:"ipv6Addresses,omitempty"`
}
