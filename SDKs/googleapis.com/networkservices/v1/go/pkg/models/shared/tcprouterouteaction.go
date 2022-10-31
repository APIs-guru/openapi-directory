package shared

type TCPRouteRouteAction struct {
	Destinations        []TCPRouteRouteDestination `json:"destinations,omitempty"`
	OriginalDestination *bool                      `json:"originalDestination,omitempty"`
}
