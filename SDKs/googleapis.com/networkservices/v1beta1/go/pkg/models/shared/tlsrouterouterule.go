package shared

type TLSRouteRouteRule struct {
	Action  *TLSRouteRouteAction `json:"action"`
	Matches []TLSRouteRouteMatch `json:"matches"`
}
