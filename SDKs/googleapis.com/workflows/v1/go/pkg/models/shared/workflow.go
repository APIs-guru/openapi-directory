package shared

type WorkflowStateEnum string

const (
	WorkflowStateEnumStateUnspecified WorkflowStateEnum = "STATE_UNSPECIFIED"
	WorkflowStateEnumActive           WorkflowStateEnum = "ACTIVE"
)

type Workflow struct {
	CreateTime         *string            `json:"createTime"`
	Description        *string            `json:"description"`
	Labels             map[string]string  `json:"labels"`
	Name               *string            `json:"name"`
	RevisionCreateTime *string            `json:"revisionCreateTime"`
	RevisionID         *string            `json:"revisionId"`
	ServiceAccount     *string            `json:"serviceAccount"`
	SourceContents     *string            `json:"sourceContents"`
	State              *WorkflowStateEnum `json:"state"`
	UpdateTime         *string            `json:"updateTime"`
}
