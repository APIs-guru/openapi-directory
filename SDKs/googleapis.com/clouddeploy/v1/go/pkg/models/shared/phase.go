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

type Phase struct {
	DeploymentJobs *DeploymentJobs `json:"deploymentJobs"`
	ID             *string         `json:"id"`
	State          *PhaseStateEnum `json:"state"`
}
