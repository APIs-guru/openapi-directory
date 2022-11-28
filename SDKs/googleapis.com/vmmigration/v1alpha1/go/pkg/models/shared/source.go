package shared

// SourceInput
// Source message describes a specific vm migration Source resource. It contains the source environment information.
type SourceInput struct {
	Aws         *AwsSourceDetailsInput `json:"aws,omitempty"`
	Description *string                `json:"description,omitempty"`
	Error       *Status                `json:"error,omitempty"`
	Labels      map[string]string      `json:"labels,omitempty"`
	Vmware      *VmwareSourceDetails   `json:"vmware,omitempty"`
}

// Source
// Source message describes a specific vm migration Source resource. It contains the source environment information.
type Source struct {
	Aws         *AwsSourceDetails    `json:"aws,omitempty"`
	CreateTime  *string              `json:"createTime,omitempty"`
	Description *string              `json:"description,omitempty"`
	Error       *Status              `json:"error,omitempty"`
	Labels      map[string]string    `json:"labels,omitempty"`
	Name        *string              `json:"name,omitempty"`
	UpdateTime  *string              `json:"updateTime,omitempty"`
	Vmware      *VmwareSourceDetails `json:"vmware,omitempty"`
}
