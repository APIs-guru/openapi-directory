package shared

// GoogleCloudIntegrationsV1alphaNextTask
// The task that is next in line to be executed, if the condition specified evaluated to true.
type GoogleCloudIntegrationsV1alphaNextTask struct {
	Condition    *string `json:"condition,omitempty"`
	Description  *string `json:"description,omitempty"`
	DisplayName  *string `json:"displayName,omitempty"`
	TaskConfigID *string `json:"taskConfigId,omitempty"`
	TaskID       *string `json:"taskId,omitempty"`
}
