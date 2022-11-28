package shared

type PhaseStateEnum string

const (
	PhaseStateEnumStateUnspecified PhaseStateEnum = "STATE_UNSPECIFIED"
	PhaseStateEnumPending          PhaseStateEnum = "PENDING"
	PhaseStateEnumInProgress       PhaseStateEnum = "IN_PROGRESS"
	PhaseStateEnumSucceeded        PhaseStateEnum = "SUCCEEDED"
	PhaseStateEnumFailed           PhaseStateEnum = "FAILED"
	PhaseStateEnumAborted          PhaseStateEnum = "ABORTED"
)

// Phase
// Phase represents a collection of jobs that are logically grouped together for a `Rollout`.
type Phase struct {
	DeploymentJobs *DeploymentJobs `json:"deploymentJobs,omitempty"`
	ID             *string         `json:"id,omitempty"`
	State          *PhaseStateEnum `json:"state,omitempty"`
}
