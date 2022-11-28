package shared

// MeshInput
// Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
type MeshInput struct {
	Description      *string           `json:"description,omitempty"`
	InterceptionPort *int32            `json:"interceptionPort,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	Name             *string           `json:"name,omitempty"`
}

// Mesh
// Mesh represents a logical configuration grouping for workload to workload communication within a service mesh. Routes that point to mesh dictate how requests are routed within this logical mesh boundary.
type Mesh struct {
	CreateTime       *string           `json:"createTime,omitempty"`
	Description      *string           `json:"description,omitempty"`
	InterceptionPort *int32            `json:"interceptionPort,omitempty"`
	Labels           map[string]string `json:"labels,omitempty"`
	Name             *string           `json:"name,omitempty"`
	SelfLink         *string           `json:"selfLink,omitempty"`
	UpdateTime       *string           `json:"updateTime,omitempty"`
}
