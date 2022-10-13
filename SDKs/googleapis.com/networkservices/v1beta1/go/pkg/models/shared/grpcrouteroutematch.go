package shared

type GrpcRouteRouteMatch struct {
	Headers []GrpcRouteHeaderMatch `json:"headers"`
	Method  *GrpcRouteMethodMatch  `json:"method"`
}
