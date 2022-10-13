package shared

type ResourceRecordSet struct {
	Kind             *string             `json:"kind"`
	Name             *string             `json:"name"`
	RoutingPolicy    *RrSetRoutingPolicy `json:"routingPolicy"`
	Rrdatas          []string            `json:"rrdatas"`
	SignatureRrdatas []string            `json:"signatureRrdatas"`
	TTL              *int32              `json:"ttl"`
	Type             *string             `json:"type"`
}
