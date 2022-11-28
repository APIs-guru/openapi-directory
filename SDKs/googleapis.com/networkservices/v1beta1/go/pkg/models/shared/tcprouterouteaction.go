package shared

// TCPRouteRouteAction
// The specifications for routing traffic and applying associated policies.
type TCPRouteRouteAction struct {
	Destinations        []TCPRouteRouteDestination `json:"destinations,omitempty"`
	OriginalDestination *bool                      `json:"originalDestination,omitempty"`
}
