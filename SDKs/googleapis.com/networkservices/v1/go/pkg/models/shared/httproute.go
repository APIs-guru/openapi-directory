package shared

// HTTPRoute
// HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
type HTTPRoute struct {
	CreateTime  *string              `json:"createTime,omitempty"`
	Description *string              `json:"description,omitempty"`
	Gateways    []string             `json:"gateways,omitempty"`
	Hostnames   []string             `json:"hostnames,omitempty"`
	Labels      map[string]string    `json:"labels,omitempty"`
	Meshes      []string             `json:"meshes,omitempty"`
	Name        *string              `json:"name,omitempty"`
	Rules       []HTTPRouteRouteRule `json:"rules,omitempty"`
	SelfLink    *string              `json:"selfLink,omitempty"`
	UpdateTime  *string              `json:"updateTime,omitempty"`
}

// HTTPRouteInput
// HttpRoute is the resource defining how HTTP traffic should be routed by a Mesh or Gateway resource.
type HTTPRouteInput struct {
	Description *string              `json:"description,omitempty"`
	Gateways    []string             `json:"gateways,omitempty"`
	Hostnames   []string             `json:"hostnames,omitempty"`
	Labels      map[string]string    `json:"labels,omitempty"`
	Meshes      []string             `json:"meshes,omitempty"`
	Name        *string              `json:"name,omitempty"`
	Rules       []HTTPRouteRouteRule `json:"rules,omitempty"`
}
