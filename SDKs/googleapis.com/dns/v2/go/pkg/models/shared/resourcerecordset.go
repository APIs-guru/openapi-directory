package shared

// ResourceRecordSet
// A unit of data that is returned by the DNS servers.
type ResourceRecordSet struct {
	Kind             *string             `json:"kind,omitempty"`
	Name             *string             `json:"name,omitempty"`
	RoutingPolicy    *RrSetRoutingPolicy `json:"routingPolicy,omitempty"`
	Rrdatas          []string            `json:"rrdatas,omitempty"`
	SignatureRrdatas []string            `json:"signatureRrdatas,omitempty"`
	TTL              *int32              `json:"ttl,omitempty"`
	Type             *string             `json:"type,omitempty"`
}
