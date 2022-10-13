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
	ClientRequestID       *string                `json:"clientRequestId"`
	CreateTime            *string                `json:"createTime"`
	CreatedFromSnapshotID *string                `json:"createdFromSnapshotId"`
	CurrentState          *JobCurrentStateEnum   `json:"currentState"`
	CurrentStateTime      *string                `json:"currentStateTime"`
	Environment           *Environment           `json:"environment"`
	ExecutionInfo         *JobExecutionInfo      `json:"executionInfo"`
	ID                    *string                `json:"id"`
	JobMetadata           *JobMetadata           `json:"jobMetadata"`
	Labels                map[string]string      `json:"labels"`
	Location              *string                `json:"location"`
	Name                  *string                `json:"name"`
	PipelineDescription   *PipelineDescription   `json:"pipelineDescription"`
	ProjectID             *string                `json:"projectId"`
	ReplaceJobID          *string                `json:"replaceJobId"`
	ReplacedByJobID       *string                `json:"replacedByJobId"`
	RequestedState        *JobRequestedStateEnum `json:"requestedState"`
	SatisfiesPzs          *bool                  `json:"satisfiesPzs"`
	StageStates           []ExecutionStageState  `json:"stageStates"`
	StartTime             *string                `json:"startTime"`
	Steps                 []Step                 `json:"steps"`
	StepsLocation         *string                `json:"stepsLocation"`
	TempFiles             []string               `json:"tempFiles"`
	TransformNameMapping  map[string]string      `json:"transformNameMapping"`
	Type                  *JobTypeEnum           `json:"type"`
}
