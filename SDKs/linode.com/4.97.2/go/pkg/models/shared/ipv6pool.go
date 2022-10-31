package shared



type IPv6Pool struct {
    Prefix *int64 `json:"prefix,omitempty"`
    Range *string `json:"range,omitempty"`
    Region *string `json:"region,omitempty"`
    RouteTarget *string `json:"route_target,omitempty"`
    
}

