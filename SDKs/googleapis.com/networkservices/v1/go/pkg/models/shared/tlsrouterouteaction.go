package shared

// TLSRouteRouteAction
// The specifications for routing traffic and applying associated policies.
type TLSRouteRouteAction struct {
	Destinations []TLSRouteRouteDestination `json:"destinations,omitempty"`
}
