package shared

type IPv6Range struct {
	Prefix      *int64  `json:"prefix"`
	Range       *string `json:"range"`
	Region      *string `json:"region"`
	RouteTarget *string `json:"route_target"`
}
