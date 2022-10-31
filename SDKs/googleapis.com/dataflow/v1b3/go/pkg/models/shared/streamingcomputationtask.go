package shared




type StreamingComputationTaskTaskTypeEnum string

const (
    StreamingComputationTaskTaskTypeEnumStreamingComputationTaskUnknown StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_UNKNOWN"
StreamingComputationTaskTaskTypeEnumStreamingComputationTaskStop StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_STOP"
StreamingComputationTaskTaskTypeEnumStreamingComputationTaskStart StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_START"
)


type StreamingComputationTask struct {
    ComputationRanges []StreamingComputationRanges `json:"computationRanges,omitempty"`
    DataDisks []MountedDataDisk `json:"dataDisks,omitempty"`
    TaskType *StreamingComputationTaskTaskTypeEnum `json:"taskType,omitempty"`
    
}

