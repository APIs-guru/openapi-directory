package shared

type TLSRoute struct {
	CreateTime  *string             `json:"createTime"`
	Description *string             `json:"description"`
	Gateways    []string            `json:"gateways"`
	Meshes      []string            `json:"meshes"`
	Name        *string             `json:"name"`
	Rules       []TLSRouteRouteRule `json:"rules"`
	SelfLink    *string             `json:"selfLink"`
	UpdateTime  *string             `json:"updateTime"`
}
