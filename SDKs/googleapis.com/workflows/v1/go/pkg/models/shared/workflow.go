package shared

type WorkflowStateEnum string

const (
	WorkflowStateEnumStateUnspecified WorkflowStateEnum = "STATE_UNSPECIFIED"
	WorkflowStateEnumActive           WorkflowStateEnum = "ACTIVE"
)

// Workflow
// Workflow program to be executed by Workflows.
type Workflow struct {
	CreateTime         *string            `json:"createTime,omitempty"`
	Description        *string            `json:"description,omitempty"`
	Labels             map[string]string  `json:"labels,omitempty"`
	Name               *string            `json:"name,omitempty"`
	RevisionCreateTime *string            `json:"revisionCreateTime,omitempty"`
	RevisionID         *string            `json:"revisionId,omitempty"`
	ServiceAccount     *string            `json:"serviceAccount,omitempty"`
	SourceContents     *string            `json:"sourceContents,omitempty"`
	State              *WorkflowStateEnum `json:"state,omitempty"`
	UpdateTime         *string            `json:"updateTime,omitempty"`
}

// WorkflowInput
// Workflow program to be executed by Workflows.
type WorkflowInput struct {
	Description    *string           `json:"description,omitempty"`
	Labels         map[string]string `json:"labels,omitempty"`
	Name           *string           `json:"name,omitempty"`
	ServiceAccount *string           `json:"serviceAccount,omitempty"`
	SourceContents *string           `json:"sourceContents,omitempty"`
}
