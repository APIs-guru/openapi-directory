package shared

type HTTPRouteDestination struct {
	ServiceName *string `json:"serviceName"`
	Weight      *int32  `json:"weight"`
}
