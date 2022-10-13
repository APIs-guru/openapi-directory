package shared

type TLSRouteRouteDestination struct {
	ServiceName *string `json:"serviceName"`
	Weight      *int32  `json:"weight"`
}
