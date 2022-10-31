package shared




type OperationStatusEnum string

const (
    OperationStatusEnumPending OperationStatusEnum = "pending"
OperationStatusEnumDone OperationStatusEnum = "done"
)



type OperationTaskTypeEnum string

const (
    OperationTaskTypeEnumAnalysis OperationTaskTypeEnum = "analysis"
OperationTaskTypeEnumCodereview OperationTaskTypeEnum = "codereview"
OperationTaskTypeEnumQueryjob OperationTaskTypeEnum = "queryjob"
)


type Operation struct {
    ID *int64 `json:"id,omitempty"`
    Status *OperationStatusEnum `json:"status,omitempty"`
    TaskResult *interface{} `json:"task-result,omitempty"`
    TaskResultURL *string `json:"task-result-url,omitempty"`
    TaskType OperationTaskTypeEnum `json:"task-type"`
    Uploads map[string]UploadSession `json:"uploads,omitempty"`
    
}

