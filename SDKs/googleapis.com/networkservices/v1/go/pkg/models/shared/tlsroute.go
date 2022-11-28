package shared

// TLSRoute
// TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
type TLSRoute struct {
	CreateTime  *string             `json:"createTime,omitempty"`
	Description *string             `json:"description,omitempty"`
	Gateways    []string            `json:"gateways,omitempty"`
	Meshes      []string            `json:"meshes,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Rules       []TLSRouteRouteRule `json:"rules,omitempty"`
	SelfLink    *string             `json:"selfLink,omitempty"`
	UpdateTime  *string             `json:"updateTime,omitempty"`
}

// TLSRouteInput
// TlsRoute defines how traffic should be routed based on SNI and other matching L3 attributes.
type TLSRouteInput struct {
	Description *string             `json:"description,omitempty"`
	Gateways    []string            `json:"gateways,omitempty"`
	Meshes      []string            `json:"meshes,omitempty"`
	Name        *string             `json:"name,omitempty"`
	Rules       []TLSRouteRouteRule `json:"rules,omitempty"`
}
