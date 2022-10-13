package shared

type WorkflowTemplate struct {
	CreateTime *string                    `json:"createTime"`
	DagTimeout *string                    `json:"dagTimeout"`
	ID         *string                    `json:"id"`
	Jobs       []OrderedJob               `json:"jobs"`
	Labels     map[string]string          `json:"labels"`
	Name       *string                    `json:"name"`
	Parameters []TemplateParameter        `json:"parameters"`
	Placement  *WorkflowTemplatePlacement `json:"placement"`
	UpdateTime *string                    `json:"updateTime"`
	Version    *int32                     `json:"version"`
}
