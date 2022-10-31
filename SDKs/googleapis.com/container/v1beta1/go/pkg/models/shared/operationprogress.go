package shared

type OperationProgressStatusEnum string

const (
	OperationProgressStatusEnumStatusUnspecified OperationProgressStatusEnum = "STATUS_UNSPECIFIED"
	OperationProgressStatusEnumPending           OperationProgressStatusEnum = "PENDING"
	OperationProgressStatusEnumRunning           OperationProgressStatusEnum = "RUNNING"
	OperationProgressStatusEnumDone              OperationProgressStatusEnum = "DONE"
	OperationProgressStatusEnumAborting          OperationProgressStatusEnum = "ABORTING"
)

type OperationProgress struct {
	Metrics []Metric                     `json:"metrics,omitempty"`
	Name    *string                      `json:"name,omitempty"`
	Stages  []OperationProgress          `json:"stages,omitempty"`
	Status  *OperationProgressStatusEnum `json:"status,omitempty"`
}
