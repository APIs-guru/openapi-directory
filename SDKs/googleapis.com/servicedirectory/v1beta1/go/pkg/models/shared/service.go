package shared

// Service
// An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
type Service struct {
	CreateTime *string           `json:"createTime,omitempty"`
	Endpoints  []Endpoint        `json:"endpoints,omitempty"`
	Metadata   map[string]string `json:"metadata,omitempty"`
	Name       *string           `json:"name,omitempty"`
	UpdateTime *string           `json:"updateTime,omitempty"`
}

// ServiceInput
// An individual service. A service contains a name and optional metadata. A service must exist before endpoints can be added to it.
type ServiceInput struct {
	Metadata map[string]string `json:"metadata,omitempty"`
	Name     *string           `json:"name,omitempty"`
}
