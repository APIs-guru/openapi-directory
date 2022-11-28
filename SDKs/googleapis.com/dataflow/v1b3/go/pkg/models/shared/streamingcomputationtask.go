package shared

type StreamingComputationTaskTaskTypeEnum string

const (
	StreamingComputationTaskTaskTypeEnumStreamingComputationTaskUnknown StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_UNKNOWN"
	StreamingComputationTaskTaskTypeEnumStreamingComputationTaskStop    StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_STOP"
	StreamingComputationTaskTaskTypeEnumStreamingComputationTaskStart   StreamingComputationTaskTaskTypeEnum = "STREAMING_COMPUTATION_TASK_START"
)

// StreamingComputationTask
// A task which describes what action should be performed for the specified streaming computation ranges.
type StreamingComputationTask struct {
	ComputationRanges []StreamingComputationRanges          `json:"computationRanges,omitempty"`
	DataDisks         []MountedDataDisk                     `json:"dataDisks,omitempty"`
	TaskType          *StreamingComputationTaskTaskTypeEnum `json:"taskType,omitempty"`
}
