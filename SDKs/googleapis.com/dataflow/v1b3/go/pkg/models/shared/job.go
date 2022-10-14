package shared

type JobCurrentStateEnum string

const (
	JobCurrentStateEnumJobStateUnknown            JobCurrentStateEnum = "JOB_STATE_UNKNOWN"
	JobCurrentStateEnumJobStateStopped            JobCurrentStateEnum = "JOB_STATE_STOPPED"
	JobCurrentStateEnumJobStateRunning            JobCurrentStateEnum = "JOB_STATE_RUNNING"
	JobCurrentStateEnumJobStateDone               JobCurrentStateEnum = "JOB_STATE_DONE"
	JobCurrentStateEnumJobStateFailed             JobCurrentStateEnum = "JOB_STATE_FAILED"
	JobCurrentStateEnumJobStateCancelled          JobCurrentStateEnum = "JOB_STATE_CANCELLED"
	JobCurrentStateEnumJobStateUpdated            JobCurrentStateEnum = "JOB_STATE_UPDATED"
	JobCurrentStateEnumJobStateDraining           JobCurrentStateEnum = "JOB_STATE_DRAINING"
	JobCurrentStateEnumJobStateDrained            JobCurrentStateEnum = "JOB_STATE_DRAINED"
	JobCurrentStateEnumJobStatePending            JobCurrentStateEnum = "JOB_STATE_PENDING"
	JobCurrentStateEnumJobStateCancelling         JobCurrentStateEnum = "JOB_STATE_CANCELLING"
	JobCurrentStateEnumJobStateQueued             JobCurrentStateEnum = "JOB_STATE_QUEUED"
	JobCurrentStateEnumJobStateResourceCleaningUp JobCurrentStateEnum = "JOB_STATE_RESOURCE_CLEANING_UP"
)

type JobRequestedStateEnum string

const (
	JobRequestedStateEnumJobStateUnknown            JobRequestedStateEnum = "JOB_STATE_UNKNOWN"
	JobRequestedStateEnumJobStateStopped            JobRequestedStateEnum = "JOB_STATE_STOPPED"
	JobRequestedStateEnumJobStateRunning            JobRequestedStateEnum = "JOB_STATE_RUNNING"
	JobRequestedStateEnumJobStateDone               JobRequestedStateEnum = "JOB_STATE_DONE"
	JobRequestedStateEnumJobStateFailed             JobRequestedStateEnum = "JOB_STATE_FAILED"
	JobRequestedStateEnumJobStateCancelled          JobRequestedStateEnum = "JOB_STATE_CANCELLED"
	JobRequestedStateEnumJobStateUpdated            JobRequestedStateEnum = "JOB_STATE_UPDATED"
	JobRequestedStateEnumJobStateDraining           JobRequestedStateEnum = "JOB_STATE_DRAINING"
	JobRequestedStateEnumJobStateDrained            JobRequestedStateEnum = "JOB_STATE_DRAINED"
	JobRequestedStateEnumJobStatePending            JobRequestedStateEnum = "JOB_STATE_PENDING"
	JobRequestedStateEnumJobStateCancelling         JobRequestedStateEnum = "JOB_STATE_CANCELLING"
	JobRequestedStateEnumJobStateQueued             JobRequestedStateEnum = "JOB_STATE_QUEUED"
	JobRequestedStateEnumJobStateResourceCleaningUp JobRequestedStateEnum = "JOB_STATE_RESOURCE_CLEANING_UP"
)

type JobTypeEnum string

const (
	JobTypeEnumJobTypeUnknown   JobTypeEnum = "JOB_TYPE_UNKNOWN"
	JobTypeEnumJobTypeBatch     JobTypeEnum = "JOB_TYPE_BATCH"
	JobTypeEnumJobTypeStreaming JobTypeEnum = "JOB_TYPE_STREAMING"
)

type Job struct {
	ClientRequestID       *string                `json:"clientRequestId,omitempty"`
	CreateTime            *string                `json:"createTime,omitempty"`
	CreatedFromSnapshotID *string                `json:"createdFromSnapshotId,omitempty"`
	CurrentState          *JobCurrentStateEnum   `json:"currentState,omitempty"`
	CurrentStateTime      *string                `json:"currentStateTime,omitempty"`
	Environment           *Environment           `json:"environment,omitempty"`
	ExecutionInfo         *JobExecutionInfo      `json:"executionInfo,omitempty"`
	ID                    *string                `json:"id,omitempty"`
	JobMetadata           *JobMetadata           `json:"jobMetadata,omitempty"`
	Labels                map[string]string      `json:"labels,omitempty"`
	Location              *string                `json:"location,omitempty"`
	Name                  *string                `json:"name,omitempty"`
	PipelineDescription   *PipelineDescription   `json:"pipelineDescription,omitempty"`
	ProjectID             *string                `json:"projectId,omitempty"`
	ReplaceJobID          *string                `json:"replaceJobId,omitempty"`
	ReplacedByJobID       *string                `json:"replacedByJobId,omitempty"`
	RequestedState        *JobRequestedStateEnum `json:"requestedState,omitempty"`
	SatisfiesPzs          *bool                  `json:"satisfiesPzs,omitempty"`
	StageStates           []ExecutionStageState  `json:"stageStates,omitempty"`
	StartTime             *string                `json:"startTime,omitempty"`
	Steps                 []Step                 `json:"steps,omitempty"`
	StepsLocation         *string                `json:"stepsLocation,omitempty"`
	TempFiles             []string               `json:"tempFiles,omitempty"`
	TransformNameMapping  map[string]string      `json:"transformNameMapping,omitempty"`
	Type                  *JobTypeEnum           `json:"type,omitempty"`
}
