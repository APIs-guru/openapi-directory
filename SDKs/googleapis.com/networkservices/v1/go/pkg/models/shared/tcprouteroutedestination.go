package shared

type TCPRouteRouteDestination struct {
	ServiceName *string `json:"serviceName"`
	Weight      *int32  `json:"weight"`
}
