package shared

// IPv6Pool
// An object representing an IPv6 pool.
type IPv6Pool struct {
	Prefix      *int64  `json:"prefix,omitempty"`
	Range       *string `json:"range,omitempty"`
	Region      *string `json:"region,omitempty"`
	RouteTarget *string `json:"route_target,omitempty"`
}
