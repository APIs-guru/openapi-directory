package shared

type WorkflowTemplate struct {
	CreateTime *string                    `json:"createTime,omitempty"`
	DagTimeout *string                    `json:"dagTimeout,omitempty"`
	ID         *string                    `json:"id,omitempty"`
	Jobs       []OrderedJob               `json:"jobs,omitempty"`
	Labels     map[string]string          `json:"labels,omitempty"`
	Name       *string                    `json:"name,omitempty"`
	Parameters []TemplateParameter        `json:"parameters,omitempty"`
	Placement  *WorkflowTemplatePlacement `json:"placement,omitempty"`
	UpdateTime *string                    `json:"updateTime,omitempty"`
	Version    *int32                     `json:"version,omitempty"`
}
