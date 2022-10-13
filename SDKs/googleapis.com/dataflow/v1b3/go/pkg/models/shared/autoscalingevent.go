package shared

type AutoscalingEventEventTypeEnum string

const (
	AutoscalingEventEventTypeEnumTypeUnknown              AutoscalingEventEventTypeEnum = "TYPE_UNKNOWN"
	AutoscalingEventEventTypeEnumTargetNumWorkersChanged  AutoscalingEventEventTypeEnum = "TARGET_NUM_WORKERS_CHANGED"
	AutoscalingEventEventTypeEnumCurrentNumWorkersChanged AutoscalingEventEventTypeEnum = "CURRENT_NUM_WORKERS_CHANGED"
	AutoscalingEventEventTypeEnumActuationFailure         AutoscalingEventEventTypeEnum = "ACTUATION_FAILURE"
	AutoscalingEventEventTypeEnumNoChange                 AutoscalingEventEventTypeEnum = "NO_CHANGE"
)

type AutoscalingEvent struct {
	CurrentNumWorkers *string                        `json:"currentNumWorkers"`
	Description       *StructuredMessage             `json:"description"`
	EventType         *AutoscalingEventEventTypeEnum `json:"eventType"`
	TargetNumWorkers  *string                        `json:"targetNumWorkers"`
	Time              *string                        `json:"time"`
	WorkerPool        *string                        `json:"workerPool"`
}
