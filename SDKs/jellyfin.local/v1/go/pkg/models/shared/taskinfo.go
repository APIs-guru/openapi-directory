package shared

type TaskInfo struct {
	Category                  *string           `json:"Category"`
	CurrentProgressPercentage *float64          `json:"CurrentProgressPercentage"`
	Description               *string           `json:"Description"`
	ID                        *string           `json:"Id"`
	IsHidden                  *bool             `json:"IsHidden"`
	Key                       *string           `json:"Key"`
	LastExecutionResult       *TaskResult       `json:"LastExecutionResult"`
	Name                      *string           `json:"Name"`
	State                     *TaskStateEnum    `json:"State"`
	Triggers                  []TaskTriggerInfo `json:"Triggers"`
}
