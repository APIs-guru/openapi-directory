package shared

type OperationStatusEnum string

const (
	OperationStatusEnumPending OperationStatusEnum = "pending"
	OperationStatusEnumDone    OperationStatusEnum = "done"
)

type OperationTaskTypeEnum string

const (
	OperationTaskTypeEnumAnalysis   OperationTaskTypeEnum = "analysis"
	OperationTaskTypeEnumCodereview OperationTaskTypeEnum = "codereview"
	OperationTaskTypeEnumQueryjob   OperationTaskTypeEnum = "queryjob"
)

type Operation struct {
	ID            *int64                   `json:"id"`
	Status        *OperationStatusEnum     `json:"status"`
	TaskResult    *interface{}             `json:"task-result"`
	TaskResultURL *string                  `json:"task-result-url"`
	TaskType      OperationTaskTypeEnum    `json:"task-type"`
	Uploads       map[string]UploadSession `json:"uploads"`
}
