package shared

type GrpcRouteDestination struct {
	ServiceName *string `json:"serviceName"`
	Weight      *int32  `json:"weight"`
}
