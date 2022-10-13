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
	Metrics []Metric                     `json:"metrics"`
	Name    *string                      `json:"name"`
	Stages  []OperationProgress          `json:"stages"`
	Status  *OperationProgressStatusEnum `json:"status"`
}
