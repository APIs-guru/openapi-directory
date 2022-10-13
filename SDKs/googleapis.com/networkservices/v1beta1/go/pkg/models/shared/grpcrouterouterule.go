package shared

type GrpcRouteRouteRule struct {
	Action  *GrpcRouteRouteAction `json:"action"`
	Matches []GrpcRouteRouteMatch `json:"matches"`
}
