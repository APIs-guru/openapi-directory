package shared

type TCPRoute struct {
	CreateTime  *string             `json:"createTime,omitempty"`
	Description *string             `json:"description,omitempty"`
	Gateways    []string            `json:"gateways,omitempty"`
	Labels      map[string]string   `json:"labels,omitempty"`
	Meshes      []string            `json:"meshes,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Rules       []TCPRouteRouteRule `json:"rules,omitempty"`
	SelfLink    *string             `json:"selfLink,omitempty"`
	UpdateTime  *string             `json:"updateTime,omitempty"`
}
