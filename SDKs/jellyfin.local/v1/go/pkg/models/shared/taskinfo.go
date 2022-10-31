package shared

type TaskInfo struct {
	Category                  *string           `json:"Category,omitempty"`
	CurrentProgressPercentage *float64          `json:"CurrentProgressPercentage,omitempty"`
	Description               *string           `json:"Description,omitempty"`
	ID                        *string           `json:"Id,omitempty"`
	IsHidden                  *bool             `json:"IsHidden,omitempty"`
	Key                       *string           `json:"Key,omitempty"`
	LastExecutionResult       *TaskResult       `json:"LastExecutionResult,omitempty"`
	Name                      *string           `json:"Name,omitempty"`
	State                     *TaskStateEnum    `json:"State,omitempty"`
	Triggers                  []TaskTriggerInfo `json:"Triggers,omitempty"`
}
