package shared

type TCPRouteRouteAction struct {
	Destinations        []TCPRouteRouteDestination `json:"destinations"`
	OriginalDestination *bool                      `json:"originalDestination"`
}
