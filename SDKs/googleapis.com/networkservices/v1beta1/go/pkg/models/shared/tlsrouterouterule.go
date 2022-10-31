package shared



type TLSRouteRouteRule struct {
    Action *TLSRouteRouteAction `json:"action,omitempty"`
    Matches []TLSRouteRouteMatch `json:"matches,omitempty"`
    
}

