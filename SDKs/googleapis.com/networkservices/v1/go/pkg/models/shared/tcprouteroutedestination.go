package shared

type TCPRouteRouteDestination struct {
	ServiceName *string `json:"serviceName,omitempty"`
	Weight      *int32  `json:"weight,omitempty"`
}
