package shared

type TCPRoute struct {
	CreateTime  *string             `json:"createTime"`
	Description *string             `json:"description"`
	Gateways    []string            `json:"gateways"`
	Labels      map[string]string   `json:"labels"`
	Meshes      []string            `json:"meshes"`
	Name        *string             `json:"name"`
	Rules       []TCPRouteRouteRule `json:"rules"`
	SelfLink    *string             `json:"selfLink"`
	UpdateTime  *string             `json:"updateTime"`
}
