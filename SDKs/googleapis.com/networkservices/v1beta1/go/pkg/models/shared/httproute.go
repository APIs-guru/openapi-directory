package shared

type HTTPRoute struct {
	CreateTime  *string              `json:"createTime"`
	Description *string              `json:"description"`
	Gateways    []string             `json:"gateways"`
	Hostnames   []string             `json:"hostnames"`
	Labels      map[string]string    `json:"labels"`
	Meshes      []string             `json:"meshes"`
	Name        *string              `json:"name"`
	Rules       []HTTPRouteRouteRule `json:"rules"`
	SelfLink    *string              `json:"selfLink"`
	UpdateTime  *string              `json:"updateTime"`
}
