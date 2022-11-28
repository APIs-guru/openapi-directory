package shared

// SourceInput
// Source message describes a specific vm migration Source resource. It contains the source environment information.
type SourceInput struct {
	Description *string              `json:"description,omitempty"`
	Labels      map[string]string    `json:"labels,omitempty"`
	Vmware      *VmwareSourceDetails `json:"vmware,omitempty"`
}

// Source
// Source message describes a specific vm migration Source resource. It contains the source environment information.
type Source struct {
	CreateTime  *string              `json:"createTime,omitempty"`
	Description *string              `json:"description,omitempty"`
	Labels      map[string]string    `json:"labels,omitempty"`
	Name        *string              `json:"name,omitempty"`
	UpdateTime  *string              `json:"updateTime,omitempty"`
	Vmware      *VmwareSourceDetails `json:"vmware,omitempty"`
}
