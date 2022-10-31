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
	CurrentNumWorkers *string                        `json:"currentNumWorkers,omitempty"`
	Description       *StructuredMessage             `json:"description,omitempty"`
	EventType         *AutoscalingEventEventTypeEnum `json:"eventType,omitempty"`
	TargetNumWorkers  *string                        `json:"targetNumWorkers,omitempty"`
	Time              *string                        `json:"time,omitempty"`
	WorkerPool        *string                        `json:"workerPool,omitempty"`
}
