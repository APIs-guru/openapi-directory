package shared

type StreamingComputationTaskTaskTypeEnum string

const (
	StreamingComputationTaskTaskTypeEnumStreamingComputationTaskUnknown StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_UNKNOWN"
	StreamingComputationTaskTaskTypeEnumStreamingComputationTaskStop    StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_STOP"
	StreamingComputationTaskTaskTypeEnumStreamingComputationTaskStart   StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_START"
)

type StreamingComputationTask struct {
	ComputationRanges []StreamingComputationRanges          `json:"computationRanges"`
	DataDisks         []MountedDataDisk                     `json:"dataDisks"`
	TaskType          *StreamingComputationTaskTaskTypeEnum `json:"taskType"`
}
